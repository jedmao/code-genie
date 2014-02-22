import IHashTable = require('../interfaces/IHashTable');
import Setting = require('./Setting');

import EndOfLineSetting = require('./EndOfLineSetting');
import IndentSizeSetting = require('./IndentSizeSetting');
import IndentStyleSetting = require('./IndentStyleSetting');
import InsertFinalNewlineSetting = require('./InsertFinalNewlineSetting');
import QuoteTypeSetting = require('./QuoteTypeSetting');
import SpaceAfterAnonymousFunctionsSetting = require('./SpaceAfterAnonymousFunctionsSetting');
import SpaceAfterControlStatementsSetting = require('./SpaceAfterControlStatementsSetting');
import SpacesAroundOperatorsSetting = require('./SpacesAroundOperatorsSetting');
import SpacesInBracketsSetting = require('./SpacesInBracketsSetting');
import TrimTrailingWhitespaceSetting = require('./TrimTrailingWhitespaceSetting');



var classes: Array<typeof Setting> = [
	EndOfLineSetting,
	IndentSizeSetting,
	IndentStyleSetting,
	InsertFinalNewlineSetting,
	QuoteTypeSetting,
	SpaceAfterAnonymousFunctionsSetting,
	SpaceAfterControlStatementsSetting,
	SpacesAroundOperatorsSetting,
	SpacesInBracketsSetting,
	TrimTrailingWhitespaceSetting
];

var settings: IHashTable<typeof Setting> = {};

classes.forEach(cls => {
	settings[cls.toString()] = cls;
});

export = settings;
