import Rule = require('./Rule');
import Token = require('../tokens/Token');


class TrimTrailingWhitespaceRule extends Rule {

	get needs() {
		return ['trim_trailing_whitespace'];
	}

	fix(token: Token) {
		if (this.settings['trim_trailing_whitespace']) {
			this.trimTrailingWhitespace(token);
		}
	}

	private trimTrailingWhitespace(token: Token) {
		// TODO: trim trailing whitespace
	}

}

export = TrimTrailingWhitespaceRule;
