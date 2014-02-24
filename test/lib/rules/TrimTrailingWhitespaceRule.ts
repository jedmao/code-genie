import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import TrimTrailingWhitespaceSetting = require('../../../lib/settings/TrimTrailingWhitespaceSetting');
import TrimTrailingWhitespaceRule = require('../../../lib/rules/TrimTrailingWhitespaceRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('TrimTrailingWhitespace Rule', () => {

	var setting: TrimTrailingWhitespaceSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new TrimTrailingWhitespaceSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('true: trims trailing whitespace', () => {
		var rule = createRule(true);
		// TODO: rule.fix(...)
	});

	it.skip('false: leaves trailing whitespace alone', () => {
		var rule = createRule(false);
		// TODO: rule.fix(...)
	});

	function createRule(trimTrailingWhitespace: boolean): TrimTrailingWhitespaceRule {
		return new TrimTrailingWhitespaceRule(new SettingProvider({
			insert_final_newline: trimTrailingWhitespace
		}, {
			insert_final_newline: setting
		}), logger);
	}

});
