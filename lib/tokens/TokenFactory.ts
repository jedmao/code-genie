import Token = require('./Token');
import LiteralToken = require('./LiteralToken');


class TokenFactory {

	createSpaceToken() {
		var token = new LiteralToken();
		token.value = token.raw = ' ';
		return token;
	}

	createNewlineToken(sequence: string) {
		var token = new LiteralToken();
		token.value = token.raw = sequence;
		return token;
	}

}

export = TokenFactory;
