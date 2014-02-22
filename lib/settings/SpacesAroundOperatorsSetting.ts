import Setting = require('./Setting');
import SpacesAroundOperatorsRule = require('../rules/SpacesAroundOperatorsRule');


class SpacesAroundOperatorsSetting extends Setting {

	static toString() {
		return 'spaces_around_operators';
	}

	get rule() {
		return SpacesAroundOperatorsRule;
	}

	parse(spacesAroundOperators: any): boolean {
		return !!spacesAroundOperators;
	}

}

export = SpacesAroundOperatorsSetting;
