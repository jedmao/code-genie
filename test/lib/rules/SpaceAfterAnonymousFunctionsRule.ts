import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import SpaceAfterAnonymousFunctionsSetting = require('../../../lib/settings/SpaceAfterAnonymousFunctionsSetting');
import SpaceAfterAnonymousFunctionsRule = require('../../../lib/rules/SpaceAfterAnonymousFunctionsRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('SpaceAfterAnonymousFunctions Rule', () => {

	var setting: SpaceAfterAnonymousFunctionsSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new SpaceAfterAnonymousFunctionsSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('true: enforces space after anonymous functions', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('false: removes spaces after anonymous functions', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(spaceAfterAnonymousFunctions: boolean): SpaceAfterAnonymousFunctionsRule {
		return new SpaceAfterAnonymousFunctionsRule(new SettingProvider({
			insert_final_newline: spaceAfterAnonymousFunctions
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
