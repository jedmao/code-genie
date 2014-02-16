import ISettings = require('./ISettings');


interface IOptions {
	encoding?: string;
	editor_config?: boolean;
	settings?: ISettings;
}

export = IOptions;
