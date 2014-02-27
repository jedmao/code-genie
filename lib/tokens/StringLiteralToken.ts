import LiteralToken = require('./LiteralToken');


class StringLiteralToken extends LiteralToken {
	value: string;

	get type() {
		return 'string-literal';
	}
}

export = StringLiteralToken;
