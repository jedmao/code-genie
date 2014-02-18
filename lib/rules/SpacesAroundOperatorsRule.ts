import Rule = require('../Rule');
import Token = require('../Token');


class SpacesAroundOperatorsRule extends Rule {

	get needs() {
		return ['spaces_around_operators'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = SpacesAroundOperatorsRule;
