/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import IRule = require('../interfaces/IRule');
import ISettings = require('../interfaces/ISettings');
import Reporter = require('../reporters/Reporter');
import FixReporter = require('../reporters/FixReporter');
import InferReporter = require('../reporters/InferReporter');


class TrimTrailingWhitespaceRule extends events.EventEmitter implements IRule {

	static setting = 'trim_trailing_whitespace';

	check(contents: string, settings: ISettings, reporter: Reporter) {
		return;
	}

	fix(contents: string, settings: ISettings, reporter: FixReporter) {
		return;
	}

	infer(contents: string, settings: ISettings, reporter: InferReporter) {
		return;
	}
}

export = TrimTrailingWhitespaceRule;
