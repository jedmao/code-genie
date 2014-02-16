/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import IRule = require('../interfaces/IRule');
import ISettings = require('../interfaces/ISettings');
import Reporter = require('../Reporter');
import FixReporter = require('../FixReporter');
import InferReporter = require('../InferReporter');


class SpacesInBracketsRule extends events.EventEmitter implements IRule {

	static setting = 'spaces_in_brackets';

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

export = SpacesInBracketsRule;
