import Rule = require('../Rule');
import Token = require('../Token');


class SpaceAfterControlStatementsRule extends Rule {

	get needs() {
		return ['space_after_control_statements'];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = SpaceAfterControlStatementsRule;
