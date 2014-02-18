import Rule = require('../Rule');
import Token = require('../Token');


class IndentSizeRule extends Rule {

	get needs() {
		return [
			'indent_size',
			'tab_width'
		];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = IndentSizeRule;
