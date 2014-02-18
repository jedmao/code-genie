import Rule = require('../Rule');
import Token = require('../Token');


class EndOfLineRule extends Rule {

	get needs() {
		return ['end_of_line'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = EndOfLineRule;
