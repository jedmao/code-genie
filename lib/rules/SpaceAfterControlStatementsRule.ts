/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import IRule = require('../interfaces/IRule');
import ISettings = require('../interfaces/ISettings');
import Reporter = require('../reporters/Reporter');
import FixReporter = require('../reporters/FixReporter');
import InferReporter = require('../reporters/InferReporter');


class SpaceAfterControlStatementsRule extends events.EventEmitter implements IRule {

	static setting = 'space_after_control_statements';

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

export = SpaceAfterControlStatementsRule;
