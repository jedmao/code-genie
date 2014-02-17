/// <reference path="../bower_components/dt-node/node.d.ts" />
import fs = require('fs');
import events = require('events');
var ec = require('editorconfig');
var extend = require('node.extend');

import IOptions = require('interfaces/IOptions');
import IRule = require('interfaces/IRule');
import ISettings = require('interfaces/ISettings');
import Logger = require('./Logger');
import RuleRegistry = require('./RuleRegistry');


class Genie extends events.EventEmitter {

	private options: IOptions;
	private fileCount: number;
	public ruleRegistry: RuleRegistry;

	fix(files: string[], options?: IOptions): Genie {
		this.options = options || {};
		this.ruleRegistry = this.ruleRegistry || this.registerRules();
		this.fileCount = files.length;
		this.forEachFile(files, (contents, settings, rule) => {
			var logger = new Logger();
			logger.emit = this.emit.bind(this);
			rule.fix(contents, settings, logger);
			if (--this.fileCount === 0) {
				this.emit('end');
			}
		});
		return this;
	}

	private registerRules() {
		var registry = new RuleRegistry();
		registry.add('indent_style',
			require('rules/IndentStyleRule'));
		registry.add('indent_size',
			require('rules/IndentSizeRule'));
		registry.add('insert_final_newline',
			require('rules/InsertFinalNewlineRule'));
		registry.add('quote_type',
			require('rules/QuoteTypeRule'));
		registry.add('space_after_anonymous_functions',
			require('rules/SpaceAfterAnonymousFunctionsRule'));
		registry.add('space_after_control_statements',
			require('rules/SpaceAfterControlStatementsRule'));
		registry.add('space_around_operators',
			require('rules/SpacesAroundOperatorsRule'));
		registry.add('trim_trailing_whitespace',
			require('rules/TrimTrailingWhitespaceRule'));
		registry.add('spaces_in_brackets',
			require('rules/SpacesInBracketsRule'));
		registry.add('end_of_line',
			require('rules/EndOfLineRule'));
		return registry;
	}

	private forEachFile(files: string[],
		callback: (contents: string, settings: ISettings, rule: IRule) => void) {

		files.forEach(file => {
			fs.readFile(file, { encoding: this.options.encoding }, (err, contents) => {
				if (err) {
					this.emit('error', err);
				}
				var settings = this.options.editor_config ? ec.parse(file) : {};
				settings = extend(settings, this.options.settings);
				// ReSharper disable once InconsistentNaming
				this.getRulesForSettings(settings).forEach(Rule => {
					callback(contents, settings, new Rule());
				});
			});
		});
	}

	private getRulesForSettings(settings: ISettings): any[] {
		var filteredSettings = Object.keys(settings).filter(key => {
			return settings[key] === true;
		});
		if (!filteredSettings.length) {
			return [];
		}
		return this.ruleRegistry.rules.filter(rule => {
			return filteredSettings.indexOf(rule.setting) !== 0;
		}).map(rule => {
			return <typeof IRule>rule.type;
		});
	}

}

export = Genie;
