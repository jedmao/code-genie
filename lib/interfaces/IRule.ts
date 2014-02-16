/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import ISettings = require('./ISettings');
import Reporter = require('../reporters/Reporter');
import FixReporter = require('../reporters/FixReporter');
import InferReporter = require('../reporters/InferReporter');


interface IRule {
	check(contents: string, settings: ISettings, reporter: Reporter);
	fix(contents: string, settings: ISettings, reporter: FixReporter);
	infer(contents: string, settings: ISettings, reporter: InferReporter);
}

export = IRule;
