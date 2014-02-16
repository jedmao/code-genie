import Reporter = require('./Reporter');
import IHashTable = require('../interfaces/IHashTable');


class InferReporter extends Reporter {

	infer(confidence: IHashTable<number>) {
		this.emit('infer', confidence);
	}

}

export = InferReporter;
