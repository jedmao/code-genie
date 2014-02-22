import Token = require('./Token');


class LiteralToken extends Token {
	value: any;
	raw: string;

	get type() {
		return 'Literal';
	}
}

export = LiteralToken;
