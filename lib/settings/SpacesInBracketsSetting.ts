import Setting = require('./Setting');
import SpacesInBracketsRule = require('../rules/SpacesInBracketsRule');


class SpacesInBracketsSetting extends Setting {

	static toString() {
		return 'spaces_in_brackets';
	}

	get rule() {
		return SpacesInBracketsRule;
	}

	parse(spacesInBrackets: any): boolean {
		return !!spacesInBrackets;
	}

}

export = SpacesInBracketsSetting;
