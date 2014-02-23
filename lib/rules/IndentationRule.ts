import Rule = require('./Rule');
import Token = require('../tokens/Token');
require('../util/string');


class IndentStyleRule extends Rule {

	get needs() {
		return [
			'indent_style',
			'indent_size',
			'tab_width'
		];
	}

	private oneIndent;
	private tryParseOneIndent(): boolean {
		var indentStyle = this.settings['indent_style'];
		if (indentStyle === 'tab') {
			this.oneIndent = '\t';
			return true;
		}
		var indentSize = this.settings['indent_size'];
		if (indentSize === 'tab') {
			indentSize = this.settings['tab_width'];
		}
		if (isNaN(indentSize)) {
			return false;
		}
		this.oneIndent = (<any>' ').repeat(indentSize);
		return true;
	}

	fix(token: Token) {
		if (!this.tryParseOneIndent()) {
			return token;
		}
		// TODO: fix indentation
	}

}

export = IndentStyleRule;
