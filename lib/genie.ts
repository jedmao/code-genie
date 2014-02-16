/// <reference path="../bower_components/dt-node/node.d.ts" />
import fs = require('fs');
import events = require('events');
var ec = require('editorconfig');
var extend = require('node.extend');

import IOptions = require('interfaces/IOptions');
import IRule = require('interfaces/IRule');
import ISettings = require('interfaces/ISettings');
import orderedRules = require('rules/orderedRules');


class Genie extends events.EventEmitter {

	private options: IOptions;
	private emitterCount = 0;

	check(files: string[], options?: IOptions): events.EventEmitter {
		this.emitterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.emitterCount++;
			this.addCommonListeners(rule.check(contents, settings));
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

	private addCommonListeners(emitter: events.EventEmitter) {
		emitter.on('error', this.emit.bind(this, 'error'));
		emitter.on('warn', this.emit.bind(this, 'warn'));
		emitter.on('debug', this.emit.bind(this, 'debug'));
		emitter.on('info', this.emit.bind(this, 'info'));
		emitter.on('end', () => {
			if (--this.emitterCount === 0) {
				this.emit('end');
			}
		});
	}

	fix(files: string[], options?: IOptions): events.EventEmitter {
		this.emitterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.emitterCount++;
			var emitter = rule.fix(contents, settings);
			emitter.on('fix', this.emit.bind(this, 'fix'));
			this.addCommonListeners(emitter);
		});
		return this;
	}

	infer(files: string[], options?: IOptions): events.EventEmitter {
		this.emitterCount = 0;
		this.options = options || {};
		this.forEachFile(files, (contents, settings, rule) => {
			this.emitterCount++;
			var emitter = rule.infer(contents, settings);
			emitter.on('infer', this.emit.bind(this, 'infer'));
			this.addCommonListeners(emitter);
		});
		return this;
	}

}

interface IHaveSetting {
	setting: string;
}

export = Genie;
