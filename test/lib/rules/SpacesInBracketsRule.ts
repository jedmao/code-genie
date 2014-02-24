import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import SpacesInBracketsSetting = require('../../../lib/settings/SpacesInBracketsSetting');
import SpacesInBracketsRule = require('../../../lib/rules/SpacesInBracketsRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('SpacesInBrackets Rule', () => {

	var setting: SpacesInBracketsSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new SpacesInBracketsSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('true: enforces spaces in brackets', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('false: removes spaces in brackets', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(spacesInBrackets: boolean): SpacesInBracketsRule {
		return new SpacesInBracketsRule(new SettingProvider({
			insert_final_newline: spacesInBrackets
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
