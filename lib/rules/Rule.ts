import IHashTable = require('interfaces/IHashTable');
import Logger = require('../Logger');
import Token = require('../tokens/Token');
import SettingProvider = require('settings/SettingProvider');


class Rule {

	settings: IHashTable<any>;

	constructor(settingProvider: SettingProvider, private logger: Logger) {
		this.settings = settingProvider.get(this.needs);
	}

	get needs(): string[] {
		return [];
	}

	tryFix(token: Token): boolean {
		try {
			this.fix(token);
		} catch (err) {
			this.logger.error(err);
			return false;
		}
		return true;
	}

	fix(token: Token): void {
		throw new Error('Extenders of Rule must implement fix method');
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

export = Rule;
