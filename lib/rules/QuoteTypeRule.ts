import Rule = require('../Rule');
import Token = require('../Token');


class QuoteTypeRule extends Rule {

	get needs() {
		return ['quote_type'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = QuoteTypeRule;
