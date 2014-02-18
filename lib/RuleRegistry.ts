import Rule = require('./Rule');
import RuleDescriptor = require('./RuleDescriptor');


class RuleRegistry {

	private _rules: RuleDescriptor[] = [];
	public get rules() {
		return this._rules;
	}

	add(setting: string, type: typeof Rule) {
		if (this.settingExists(setting)) {
			throw new Error('Setting "' + setting + '" already exists');
		}
		this._rules.push(new RuleDescriptor(setting, type));
	}

	private settingExists(setting: string) {
		return this._rules.some(rd => {
			return rd.setting === setting;
		});
	}

}

export = RuleRegistry;
