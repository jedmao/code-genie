import Setting = require('./Setting');
import SpaceAfterAnonymousFunctionsRule = require('../rules/SpaceAfterAnonymousFunctionsRule');


class SpaceAfterAnonymousFunctionsSetting extends Setting {

	static toString() {
		return 'space_after_anonymous_functions';
	}

	get rule() {
		return SpaceAfterAnonymousFunctionsRule;
	}

	parse(spaceAfterAnonymousFunctions: any): boolean {
		return !!spaceAfterAnonymousFunctions;
	}

}

export = SpaceAfterAnonymousFunctionsSetting;
