import Rule = require('./Rule');
import Token = require('../tokens/Token');


class SpacesAroundOperatorsRule extends Rule {

	get needs() {
		return ['spaces_around_operators'];
	}

	fix(token: Token) {
		if (this.settings['spaces_around_operators']) {
			this.enforceSpacesAroundOperators(token);
		} else {
			this.removeSpacesAroundOperators(token);
		}
	}

	private enforceSpacesAroundOperators(token: Token) {
		token.findHas('operator').forEach(t => {
			if (!t.prev.is('whitespace')) {
				t.insertWhitespaceBefore(' ');
			}
			if (!t.next.is('whitespace')) {
				t.insertWhitespaceAfter(' ');
			}
		});
	}

	private removeSpacesAroundOperators(token: Token) {
		token.findHas('operator').forEach(t => {
			var prevToken = t.prev;
			if (prevToken.is('whitespace')) {
				prevToken.remove();
			}
			var nextToken = t.next;
			if (nextToken.is('whitespace')) {
				nextToken.remove();
			}
		});
	}

}

export = SpacesAroundOperatorsRule;
