import Logger = require('../Logger');
import Rule = require('../rules/Rule');


class Setting {

	constructor(private logger: Logger) {
		return;
	}

	get ruleClass(): typeof Rule {
		throw new Error('Extenders of Setting must implement rule property');
	}

	parse(settingValue: any): any {
		throw new Error('Extenders of Setting must implement parse method');
	}

	info(message: string) {
		this.logger.emit('info', message);
	}

	debug(message: string) {
		this.logger.emit('debug', message);
	}

	warn(message: string) {
		this.logger.emit('warn', message);
	}

}

export = Setting;
