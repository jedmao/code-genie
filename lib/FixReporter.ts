import Reporter = require('./Reporter');


class FixReporter extends Reporter {

	fix(contents: string) {
		this.emit('fix', contents);
	}

}

export = FixReporter;
