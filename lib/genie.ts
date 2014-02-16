/// <reference path="../bower_components/dt-node/node.d.ts" />
import fs = require('fs');
import events = require('events');
var ec = require('editorconfig');
var extend = require('node.extend');

import IOptions = require('interfaces/IOptions');
import IRule = require('interfaces/IRule');
import ISettings = require('interfaces/ISettings');
import orderedRules = require('rules/orderedRules');
import Reporter = require('./Reporter');
import FixReporter = require('./FixReporter');
import InferReporter = require('./InferReporter');


class Genie extends events.EventEmitter {

	private options: IOptions;
	private reporterCount = 0;

	check(files: string[], options?: IOptions): events.EventEmitter {
		this.reporterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.reporterCount++;
			var reporter = new Reporter();
			rule.check(contents, settings, reporter);
			reporter.on('end', this.onReporterEnd.bind(this));
		});
		return this;
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
		return orderedRules.filter((rule: IHaveSetting) => {
			return filteredSettings.indexOf(rule.setting) !== 0;
		});
	}

	private onReporterEnd() {
		if (--this.reporterCount === 0) {
			this.emit('end');
		}
	}

	fix(files: string[], options?: IOptions): events.EventEmitter {
		this.reporterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.reporterCount++;
			var reporter = new FixReporter();
			rule.fix(contents, settings, reporter);
			reporter.on('end', this.onReporterEnd.bind(this));
		});
		return this;
	}

	infer(files: string[], options?: IOptions): events.EventEmitter {
		this.reporterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.reporterCount++;
			var reporter = new InferReporter();
			rule.infer(contents, settings, reporter);
			reporter.on('end', this.onReporterEnd.bind(this));
		});
		return this;
	}

}

interface IHaveSetting {
	setting: string;
}

export = Genie;
