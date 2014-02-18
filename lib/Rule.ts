import Logger = require('./Logger');
import IProvideSettings = require('interfaces/IProvideSettings');
import Token = require('Token');


class Rule {

	settings: any;

	constructor(private logger: Logger, settingsProvider: IProvideSettings) {
		this.settings = settingsProvider.get(this.needs);
	}

	get needs(): string[] {
		return [];
	}

	tryFix(contents: Token) {
		try {
			this.fix(contents);
		} catch (err) {
			this.logger.error(err);
		}
	}

	fix(contents: Token) {
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
