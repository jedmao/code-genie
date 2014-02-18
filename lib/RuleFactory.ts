import Rule = require('./Rule');
import RuleRegistry = require('./RuleRegistry');
import ISettings = require('interfaces/ISettings');
import Logger = require('./Logger');


class RuleFactory {

	private registry = new RuleRegistry();

	register(setting: string, type: typeof Rule) {
		this.registry.add(setting, type);
	}

	create(settings: ISettings, logger: Logger): Rule[] {
		var filteredSettings = Object.keys(settings).filter(key => {
			return settings[key] === true;
		});
		if (!filteredSettings.length) {
			return [];
		}
		return this.registry.rules.filter(descriptor => {
			return filteredSettings.indexOf(descriptor.setting) !== 0;
		}).map(descriptor => {
			// ReSharper disable once InconsistentNaming
			var RuleType = descriptor.type;
			return new RuleType(logger, this);
		});
	}

	get(needs: string[]) {
		return;
	}

}

export = RuleFactory;
