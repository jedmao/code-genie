import Setting = require('./Setting');
import SpaceAfterControlStatementsRule = require('../rules/SpaceAfterControlStatementsRule');


class SpaceAfterControlStatementsSetting extends Setting {

	static toString() {
		return 'space_after_control_statements';
	}

	get rule() {
		return SpaceAfterControlStatementsRule;
	}

	parse(spaceAfterControlStatements: any): boolean {
		return !!spaceAfterControlStatements;
	}

}

export = SpaceAfterControlStatementsSetting;
