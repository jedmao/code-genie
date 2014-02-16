import IRule = require('../interfaces/IRule');
import IndentStyleRule = require('./IndentStyleRule');
import IndentSizeRule = require('./IndentSizeRule');
import InsertFinalNewlineRule = require('./InsertFinalNewlineRule');
import QuoteTypeRule = require('./QuoteTypeRule');
import SpaceAfterAnonymousFunctionsRule = require('./SpaceAfterAnonymousFunctionsRule');
import SpaceAfterControlStatementsRule = require('./SpaceAfterControlStatementsRule');
import SpacesAroundOperatorsRule = require('./SpacesAroundOperatorsRule');
import TrimTrailingWhitespaceRule = require('./TrimTrailingWhitespaceRule');
import SpacesInBracketsRule = require('./SpacesInBracketsRule');
import EndOfLineRule = require('./EndOfLineRule');


var orderedRules = [
	IndentStyleRule,
	IndentSizeRule,
	InsertFinalNewlineRule,
	QuoteTypeRule,
	SpaceAfterAnonymousFunctionsRule,
	SpaceAfterControlStatementsRule,
	SpacesAroundOperatorsRule,
	TrimTrailingWhitespaceRule,
	SpacesInBracketsRule,
	EndOfLineRule
];

export = orderedRules;
