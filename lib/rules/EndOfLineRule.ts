import os = require('os');

import LiteralToken = require('../tokens/LiteralToken');
import Rule = require('./Rule');
import Token = require('../tokens/Token');


class EndOfLineRule extends Rule {

	get needs() {
		return ['end_of_line'];
	}

	fix(token: Token) {
		// ReSharper disable once InconsistentNaming
		var EOL = this.settings['end_of_line'];
		if (typeof EOL === 'undefined') {
			return;
		}
		token.find('newline').forEach((t: LiteralToken) => {
			t.raw = t.value = EOL;
		});
	}

}

export = EndOfLineRule;
