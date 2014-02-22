import Rule = require('./Rule');
import Token = require('../tokens/Token');


class SpaceAfterControlStatementsRule extends Rule {

	get needs() {
		return ['space_after_control_statements'];
	}

	fix(token: Token) {
		if (this.settings['space_after_control_statements']) {
			this.enforceSpaceAfterControlStatements(token);
		} else {
			this.removeSpaceAfterControlStatements(token);
		}
	}

	private enforceSpaceAfterControlStatements(token: Token) {
		// TODO: enforce space after anonymous functions
	}

	private removeSpaceAfterControlStatements(token: Token) {
		// TODO: remove space after anonymous functions
	}

}

export = SpaceAfterControlStatementsRule;
