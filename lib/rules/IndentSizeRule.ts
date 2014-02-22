import Rule = require('./Rule');
import Token = require('../tokens/Token');


class IndentSizeRule extends Rule {

	get needs() {
		return [
			'indent_size',
			'tab_width'
		];
	}

	private indentSize: number;
	private tryParseIndentSize() {
		var indentSize = this.settings['indent_size'];
		if (indentSize === 'tab') {
			indentSize = this.settings['tab_width'];
		}
		if (isNaN(indentSize)) {
			return false;
		}
		this.indentSize = indentSize;
		return true;
	}

	fix(token: Token) {
		if (!this.tryParseIndentSize()) {
			return;
		}
		// TODO: Fix indent size
	}

}

export = IndentSizeRule;
