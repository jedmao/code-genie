import Setting = require('./Setting');
import InsertFinalNewlineRule = require('../rules/InsertFinalNewlineRule');


class InsertFinalNewlineSetting extends Setting {

	static toString() {
		return 'insert_final_newline';
	}

	get rule() {
		return InsertFinalNewlineRule;
	}

	parse(insertFinalNewline: any): boolean {
		return !!insertFinalNewline;
	}

}

export = InsertFinalNewlineSetting;
