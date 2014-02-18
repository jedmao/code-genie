import Rule = require('../Rule');
import Token = require('../Token');


class SpaceAfterAnonymousFunctionsRule extends Rule {

	get needs() {
		return ['space_after_anonymous_functions'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = SpaceAfterAnonymousFunctionsRule;
