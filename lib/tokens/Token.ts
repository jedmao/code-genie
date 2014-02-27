import StringLiteralToken = require('./StringLiteralToken');


class Token {

	//static parse(contents: string) {
	//	return new Token();
	//}

	get type(): string {
		return '';
	}

	get level(): number {
		return 0;
	}

	get prev() {
		return this;
	}

	get next() {
		return this;
	}

	get last() {
		return this;
	}

	is(...types: string[]) {
		return types.indexOf(this.type) !== -1;
	}

	remove() {
		return;
	}

	find(selector: string): Token[] {
		return [this];
	}

	findNewlines(): StringLiteralToken[] {
		return <Array<StringLiteralToken>>this.find('StringLiteral');
	}

	findLeadingWhitespace(): StringLiteralToken[] {
		return <Array<StringLiteralToken>>this.find('StringLiteral');
	}

	findTrailingWhitespace(): StringLiteralToken[] {
		return <Array<StringLiteralToken>>this.find('StringLiteral');
	}

	findStringLiterals(): StringLiteralToken[] {
		return <Array<StringLiteralToken>>this.find('StringLiteral');
	}

	findFunctionExpressions(): Token[] {
		return this.find('FunctionExpression');
	}

	findHas(property: string) {
		return [this];
	}

	insertWhitespaceBefore(value: string) {
		return this;
	}

	insertWhitespaceAfter(value: string) {
		return this;
	}

	insertNewlineAfter(value: string) {
		return this;
	}

}

export = Token;
