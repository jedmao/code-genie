import Setting = require('./Setting');
import IndentSizeRule = require('../rules/IndentSizeRule');


class IndentSizeSetting extends Setting {

	static toString() {
		return 'indent_size';
	}

	get rule() {
		return IndentSizeRule;
	}

	parse(indentSize: any): any {
		switch (indentSize) {
			case 'tab':
				return indentSize;
			default:
				var result = parseInt(indentSize, 10);
				if (!isNaN(result)) {
					return result;
				}
				this.warn('Unsupported indent_size: ' + indentSize);
		}
		// ReSharper disable once NotAllPathsReturnValue
	}

}

export = IndentSizeSetting;
