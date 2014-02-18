/// <reference path="../bower_components/dt-node/node.d.ts" />
import fs = require('fs');
import events = require('events');
var ec = require('editorconfig');
var extend = require('node.extend');

import IOptions = require('interfaces/IOptions');
import ISettings = require('interfaces/ISettings');
import Rule = require('./Rule');
import Logger = require('./Logger');
import RuleFactory = require('./RuleFactory');
import Token = require('./Token');


class Genie extends events.EventEmitter {

	private options: IOptions;
	private fileCount: number;
	public ruleFactory = new RuleFactory();

	constructor(private logger?: Logger) {
		super();
		if (!logger) {
			this.logger = logger;
		}
		this.registerRules();
	}

	private registerRules() {
		require('typescript-require');
		var reg = this.ruleFactory.register;
		reg('indent_style',
			require('rules/IndentStyleRule.ts'));
		reg('indent_size',
			require('rules/IndentSizeRule.ts'));
		reg('insert_final_newline',
			require('rules/InsertFinalNewlineRule.ts'));
		reg('quote_type',
			require('rules/QuoteTypeRule.ts'));
		reg('space_after_anonymous_functions',
			require('rules/SpaceAfterAnonymousFunctionsRule.ts'));
		reg('space_after_control_statements',
			require('rules/SpaceAfterControlStatementsRule.ts'));
		reg('space_around_operators',
			require('rules/SpacesAroundOperatorsRule.ts'));
		reg('trim_trailing_whitespace',
			require('rules/TrimTrailingWhitespaceRule.ts'));
		reg('spaces_in_brackets',
			require('rules/SpacesInBracketsRule.ts'));
		reg('end_of_line',
			require('rules/EndOfLineRule.ts'));
	}

	fix(files: string[], options?: IOptions): Genie {
		this.options = options || {};
		this.fileCount = files.length;
		this.forEachFile(files, (contents, rule) => {
			rule.fix(Token.parse(contents));
			if (--this.fileCount === 0) {
				this.emit('end');
			}
		});
		return this;
	}

	private forEachFile(files: string[],
		callback: (contents: string, rule: Rule) => void) {

		files.forEach(file => {
			fs.readFile(file, { encoding: this.options.encoding }, (err, contents) => {
				if (err) {
					this.emit('error', err);
				}
				var settings = this.options.editor_config ? ec.parse(file) : {};
				settings = extend(settings, this.options.settings);
				// ReSharper disable once InconsistentNaming
				this.ruleFactory.create(settings, this.logger).forEach(rule => {
					callback(contents, rule);
				});
			});
		});
	}

}

export = Genie;
