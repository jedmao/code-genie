import Rule = require('../Rule');
import Token = require('../Token');


class InsertFinalNewlineRule extends Rule {

	get needs() {
		return [
			'insert_final_newline',
			'end_of_line'
		];
	}

	fix(contents: Token) {
		return contents;
	}

}

export = InsertFinalNewlineRule;
