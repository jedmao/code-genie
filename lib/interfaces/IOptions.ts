import IHashTable = require('./IHashTable');


interface IOptions {
	encoding?: string;
	editor_config?: boolean;
	settings?: IHashTable<any>;
}

export = IOptions;
