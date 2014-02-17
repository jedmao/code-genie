import IRule = require('../interfaces/IRule');
import ISettings = require('../interfaces/ISettings');
import Logger = require('../Logger');


class SpaceAfterAnonymousFunctionsRule implements IRule {
	fix(contents: string, settings: ISettings, logger: Logger) {
		return contents;
	}
}

export = SpaceAfterAnonymousFunctionsRule;
