import Setting = require('./Setting');
import QuoteTypeRule = require('../rules/QuoteTypeRule');


class QuoteTypeSetting extends Setting {

	static toString() {
		return 'quote_type';
	}

	get rule() {
		return QuoteTypeRule;
	}

	parse(quoteType: any): string {
		switch (quoteType) {
			case 'single':
			case 'double':
			case 'auto':
				return quoteType;
			default:
				this.warn('Unsupported quote_type: ' + quoteType);
		}
		// ReSharper disable once NotAllPathsReturnValue
	}

}

export = QuoteTypeSetting;
