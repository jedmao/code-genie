import Rule = require('./Rule');
import Token = require('../tokens/Token');
require('../util/string');


class QuoteTypeRule extends Rule {

	get needs() {
		return ['quote_type'];
	}

	fix(token: Token) {
		switch (this.settings['quote_type']) {
			case 'single':
				this.enforceQuotes(token, '"', '\'');
				break;
			case 'double':
				this.enforceQuotes(token, '\'', '"');
				break;
		}
	}

	private enforceQuotes(token: Token, oldQuote: string, newQuote: string) {
		var startsWithOldQuote = new RegExp('^' + oldQuote);
		var reverseEscapedOldQuote = new RegExp(oldQuote + '\\', 'g');
		var unescapedNewQuote = new RegExp('(' + newQuote + '(\\\\)*)(?!\\)', 'g');
		token.findStringLiterals().forEach(t => {
			if (startsWithOldQuote.test(t.raw)) {
				var value: string = (<any>t.value).reverse();
				value = value.replace(reverseEscapedOldQuote, newQuote);
				value = value.replace(unescapedNewQuote, newQuote + '\\');
				t.value = (<any>value).reverse();
				t.raw = newQuote + t.value + newQuote;
			}
		});
	}

}

export = QuoteTypeRule;
