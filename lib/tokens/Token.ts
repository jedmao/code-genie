class Token {

	static parse(contents: string) {
		return new Token();
	}

	get type(): string {
		return '';
	}

	get prev() {
		return this;
	}

	get next() {
		return this;
	}

	find(selector: string) {
		return [this];
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

	insertNewlineBefore(value: string) {
		return this;
	}

	insertNewlineAfter(value: string) {
		return this;
	}

	is(...types: string[]) {
		return types.indexOf(this.type) !== -1;
	}

	remove() {
		return;
	}

	insertBefore(token: Token) {
		token.before(this);
	}

	private before(token: Token) {
		return;
	}

	insertAfter(token: Token) {
		token.after(this);
	}

	private after(token: Token) {
		return;
	}

	hasOperator() {
		return this.has('operator');
	}

	has(key: string) {
		return Object.keys(this).indexOf(key) !== -1;
	}

	get last() {
		return this;
	}

	get level(): number {
		return 0;
	}

}

export = Token;
