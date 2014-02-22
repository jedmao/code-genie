import os = require('os');

import Rule = require('./Rule');
import Token = require('../tokens/Token');


class InsertFinalNewlineRule extends Rule {

	get needs() {
		return [
			'insert_final_newline',
			'end_of_line'
		];
	}

	fix(token: Token) {
		if (this.settings['insert_final_newline']) {
			this.enforceFinalNewline(token);
		} else {
			this.removeFinalNewlines(token);
		}
	}

	private enforceFinalNewline(token: Token) {
		// ReSharper disable once InconsistentNaming
		var EOL = this.settings['end_of_line'] || os.EOL;
		var lastToken = token.last;
		if (!lastToken.is('newline')) {
			lastToken.insertNewlineAfter(EOL);
		}
	}

	private removeFinalNewlines(token: Token) {
		while (token.last.is('newline')) {
			token.last.remove();
		}
	}

}

export = InsertFinalNewlineRule;
