/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import ISettings = require('./ISettings');


interface IRule {
	check(contents: string, settings: ISettings): events.EventEmitter;
	fix(contents: string, settings: ISettings): events.EventEmitter;
	infer(contents: string, settings: ISettings): events.EventEmitter;
}

export = IRule;
