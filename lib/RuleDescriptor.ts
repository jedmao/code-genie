import Rule = require('./Rule');


class RuleDescriptor {
	constructor(public setting: string, public type: typeof Rule) {
		return;
	}
}

export = RuleDescriptor;
