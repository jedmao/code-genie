import os = require('os');

import newlines = require('../newlines');
import Rule = require('./Rule');
import Token = require('../tokens/Token');


class InsertFinalNewlineRule extends Rule {

	get needs() {
		return [
			'insert_final_newline',
			'end_of_line'
		];
	}

	private EOL: string;
	private tryParseEOL() {
		this.EOL = newlines[this.settings['end_of_line']] || os.EOL;
		return true;
	}

	fix(token: Token) {
		if (this.settings['insert_final_newline']) {
			this.enforceFinalNewline(token);
		} else {
			this.removeFinalNewlines(token);
		}
	}

	private enforceFinalNewline(token: Token) {
		if (!this.tryParseEOL()) {
			return;
		}
		var lastToken = token.last;
		if (!lastToken.is('newline')) {
			lastToken.insertNewlineAfter(this.EOL);
		}
	}

	private removeFinalNewlines(token: Token) {
		while (token.last.is('newline')) {
			token.last.remove();
		}
	}

}

export = InsertFinalNewlineRule;
