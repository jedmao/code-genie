import Rule = require('./Rule');
import Token = require('../tokens/Token');


class SpaceAfterAnonymousFunctionsRule extends Rule {

	get needs() {
		return ['space_after_anonymous_functions'];
	}

	fix(token: Token) {
		var fn: Function;
		if (this.settings['space_after_anonymous_functions']) {
			fn = this.enforceSpace;
		} else {
			fn = this.removeSpaces;
		}
		// TODO: filter to id === null
		token.findFunctionExpressions().forEach(fn.bind(this, token));
	}

	private enforceSpace(token: Token) {
		// TODO: enforce space after anonymous functions
	}

	private removeSpaces(token: Token) {
		// TODO: remove space after anonymous functions
	}

}

export = SpaceAfterAnonymousFunctionsRule;
