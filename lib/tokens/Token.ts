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

	insertNewlineAfter(value: string) {
		return this;
	}

}

export = Token;
