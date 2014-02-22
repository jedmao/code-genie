/// <reference path="../bower_components/dt-node/node.d.ts" />
var ec = require('editorconfig');
import events = require('events');
var extend = require('node.extend');
import fs = require('fs');

import IHashTable = require('interfaces/IHashTable');
import IOptions = require('interfaces/IOptions');
import Logger = require('./Logger');
import Rule = require('rules/Rule');
import Setting = require('settings/Setting');
import settings = require('settings/settings');
import SettingFactory = require('settings/SettingFactory');
import SettingProvider = require('settings/SettingProvider');
import Token = require('tokens/Token');


class Genie extends events.EventEmitter {

	private options: IOptions;
	private fileCount: number;
	private settingFactory: SettingFactory;

	constructor(private logger?: Logger) {
		super();
		if (!logger) {
			this.logger = logger;
		}
		this.settingFactory = new SettingFactory(logger);
	}

	registerSetting(setting: typeof Setting) {
		this.settingFactory.register(setting);
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
				var rawSettings = this.options.editor_config ? ec.parse(file) : {};
				rawSettings = extend(rawSettings, this.options.settings);

				var settings = this.settingFactory.createSettings(rawSettings);
				var settingProvider = new SettingProvider(rawSettings, settings);
				this.createRules(settingProvider, settings).forEach(rule => {
					callback(contents, rule);
				});
			});
		});
	}

	private createRules(settingProvider: SettingProvider, settings: IHashTable<Setting>): Rule[] {
		return Object.keys(settings).map(key => {
			var setting = settings[key];
			// ReSharper disable once InconsistentNaming
			return new setting.ruleClass(settingProvider, this.logger);
		});
	}

}

export = Genie;
