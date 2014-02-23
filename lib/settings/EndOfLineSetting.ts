import Setting = require('./Setting');
import EndOfLineRule = require('../rules/EndOfLineRule');


class EndOfLineSetting extends Setting {

	static toString() {
		return 'end_of_line';
	}

	get rule() {
		return EndOfLineRule;
	}

	// ReSharper disable once InconsistentNaming
	parse(EOL: any): string {
		switch (EOL) {
			case 'lf':
				return '\n';
			case 'crlf':
				return '\r\n';
			default:
				this.warn('Unsupported end_of_line: ' + EOL);
		}
		// ReSharper disable once NotAllPathsReturnValue
	}

}

export = EndOfLineSetting;
