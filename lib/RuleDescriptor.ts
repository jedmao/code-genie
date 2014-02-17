import IRule = require('./interfaces/IRule');


class RuleDescriptor {
	constructor(public setting: string, public type: typeof IRule) {
		return;
	}
}

export = RuleDescriptor;
