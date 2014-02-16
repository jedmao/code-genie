/// <reference path="../../bower_components/dt-node/node.d.ts" />
import events = require('events');


class Reporter extends events.EventEmitter {

	info(message: string) {
		this.emit('info', message);
	}

	debug(message: string) {
		this.emit('debug', message);
	}

	warn(message: string) {
		this.emit('warn', message);
	}

	error(err: Error) {
		this.emit('error', err);
	}

	end() {
		this.emit('end');
	}

}

export = Reporter;
