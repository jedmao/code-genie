/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import ISettings = require('./ISettings');
import Reporter = require('../Reporter');
import FixReporter = require('../FixReporter');
import InferReporter = require('../InferReporter');


interface IRule {
	check(contents: string, settings: ISettings, reporter: Reporter);
	fix(contents: string, settings: ISettings, reporter: FixReporter);
	infer(contents: string, settings: ISettings, reporter: InferReporter);
}

export = IRule;
