class Token {

	static parse(contents: string) {
		return new Token();
	}

	constructor() {
		return;
	}

	get type(): string {
		return '';
	}

	get parent() {
		return this;
	}

	get siblings() {
		return [this];
	}

	get children() {
		return [this];
	}

	get prev() {
		return this;
	}

	get next() {
		return this;
	}

	closest(tokenType: string) {
		return this;
	}

}

export = Token;
