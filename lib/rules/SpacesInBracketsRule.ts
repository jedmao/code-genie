import Rule = require('../Rule');
import Token = require('../Token');


class SpacesInBracketsRule extends Rule {

	get needs() {
		return ['spaces_in_brackets'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = SpacesInBracketsRule;
