import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import InsertFinalNewlineSetting = require('../../../lib/settings/InsertFinalNewlineSetting');
import InsertFinalNewlineRule = require('../../../lib/rules/InsertFinalNewlineRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('InsertFinalNewline Rule', () => {

	var setting: InsertFinalNewlineSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new InsertFinalNewlineSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('enforces final newline when setting is true', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('removes final newlines when setting is false', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(insertFinalNewline: boolean): InsertFinalNewlineRule {
		return new InsertFinalNewlineRule(new SettingProvider({
			insert_final_newline: insertFinalNewline
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
