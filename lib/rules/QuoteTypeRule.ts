import Rule = require('./Rule');
import Token = require('../tokens/Token');


class QuoteTypeRule extends Rule {

	get needs() {
		return ['quote_type'];
	}

	fix(token: Token) {
		switch (this.settings['quote_type']) {
			case 'single':
				this.enforceSingleQuotes(token);
				break;
			case 'double':
				this.enforceDoubleQuotes(token);
				break;
			case 'auto':
				this.enforceAutoQuotes(token);
				break;
		}
	}

	private enforceSingleQuotes(token: Token) {
		// TODO: enforce single quotes
	}

	private enforceDoubleQuotes(token: Token) {
		// TODO: enforce double quotes
	}

	private enforceAutoQuotes(token: Token) {
		// TODO: enforce auto quotes
	}

}

export = QuoteTypeRule;
