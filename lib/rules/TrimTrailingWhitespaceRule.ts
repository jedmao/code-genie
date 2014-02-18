import Rule = require('../Rule');
import Token = require('../Token');


class TrimTrailingWhitespaceRule extends Rule {

	fix(contents: Token) {
		return contents;
	}

}

export = TrimTrailingWhitespaceRule;
