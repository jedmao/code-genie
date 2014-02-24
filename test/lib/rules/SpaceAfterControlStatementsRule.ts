import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import SpaceAfterControlStatementsSetting = require('../../../lib/settings/SpaceAfterControlStatementsSetting');
import SpaceAfterControlStatementsRule = require('../../../lib/rules/SpaceAfterControlStatementsRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('SpaceAfterControlStatements Rule', () => {

	var setting: SpaceAfterControlStatementsSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new SpaceAfterControlStatementsSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('true: enforces space after control statements', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('false: removes spaces after control statements', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(spaceAfterControlStatements: boolean): SpaceAfterControlStatementsRule {
		return new SpaceAfterControlStatementsRule(new SettingProvider({
			insert_final_newline: spaceAfterControlStatements
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
