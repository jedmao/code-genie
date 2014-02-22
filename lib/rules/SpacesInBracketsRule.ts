import Rule = require('./Rule');
import Token = require('../tokens/Token');


class SpacesInBracketsRule extends Rule {

	get needs() {
		return ['spaces_in_brackets'];
	}

	fix(token: Token) {
		if (this.settings['spaces_in_brackets']) {
			this.enforceSpacesInBrackets(token);
		} else {
			this.removeSpacesInBrackets(token);
		}
	}

	private enforceSpacesInBrackets(token: Token) {
		// TODO: enforce spaces in brackets
	}

	private removeSpacesInBrackets(token: Token) {
		// TODO: remove spaces in brackets
	}

}

export = SpacesInBracketsRule;
