/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');
import ISettings = require('./ISettings');
import Logger = require('../Logger');


interface IRule {
	fix(contents: string, settings: ISettings, logger: Logger): string;
}

export = IRule;
