import Rule = require('../Rule');
import Token = require('../Token');


class IndentStyleRule extends Rule {

	get needs() {
		return ['indent_style'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = IndentStyleRule;
