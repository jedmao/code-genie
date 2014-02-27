import os = require('os');

import newlines = require('../newlines');
import Rule = require('./Rule');
import Token = require('../tokens/Token');


class EndOfLineRule extends Rule {

	get needs() {
		return ['end_of_line'];
	}

	private EOL: string;
	private tryParseEOL() {
		// ReSharper disable once InconsistentNaming
		var EOL = newlines[this.settings['end_of_line']];
		if (typeof EOL === 'undefined') {
			return false;
		}
		this.EOL = EOL;
		return true;
	}

	fix(token: Token) {
		if (!this.tryParseEOL()) {
			return;
		}
		token.findNewlines().forEach(t => {
			t.raw = t.value = this.EOL;
		});
	}

}

export = EndOfLineRule;
