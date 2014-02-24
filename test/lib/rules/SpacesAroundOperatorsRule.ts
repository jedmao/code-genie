import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import SpacesAroundOperatorsSetting = require('../../../lib/settings/SpacesAroundOperatorsSetting');
import SpacesAroundOperatorsRule = require('../../../lib/rules/SpacesAroundOperatorsRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('SpacesAroundOperators Rule', () => {

	var setting: SpacesAroundOperatorsSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new SpacesAroundOperatorsSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('true: enforces spaces around operators', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('false: removes spaces around operators', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(spacesAroundOperators: boolean): SpacesAroundOperatorsRule {
		return new SpacesAroundOperatorsRule(new SettingProvider({
			insert_final_newline: spacesAroundOperators
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
