import Rule = require('./Rule');
import Token = require('../tokens/Token');


class IndentStyleRule extends Rule {

	get needs() {
		return ['indent_style'];
	}

	fix(token: Token) {
		var indentStyle = this.settings['indent_style'];
		if (typeof indentStyle === 'undefined') {
			return;
		}
		// TODO: fix indent style
	}

}

export = IndentStyleRule;
