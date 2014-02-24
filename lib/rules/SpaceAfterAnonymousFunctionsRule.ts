import Rule = require('./Rule');
import Token = require('../tokens/Token');


class SpaceAfterAnonymousFunctionsRule extends Rule {

	get needs() {
		return ['space_after_anonymous_functions'];
	}

	fix(token: Token) {
		if (this.settings['space_after_anonymous_functions']) {
			this.enforceSpaceAfterAnonymousFunctions(token);
		} else {
			this.removeSpacesAfterAnonymousFunctions(token);
		}
	}

	private enforceSpaceAfterAnonymousFunctions(token: Token) {
		// TODO: enforce space after anonymous functions
	}

	private removeSpacesAfterAnonymousFunctions(token: Token) {
		// TODO: remove space after anonymous functions
	}

}

export = SpaceAfterAnonymousFunctionsRule;
