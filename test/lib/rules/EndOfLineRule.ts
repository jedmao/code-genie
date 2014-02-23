import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import EndOfLineSetting = require('../../../lib/settings/EndOfLineSetting');
import EndOfLineRule = require('../../../lib/rules/EndOfLineRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('EndOfLine Rule', () => {

	var setting: EndOfLineSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new EndOfLineSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('enforces lf setting', () => {
		var rule = createRule('lf');
		// TODO: rule.fix(...)
	});

	it.skip('enforces crlf setting', () => {
		var rule = createRule('crlf');
		// TODO: rule.fix(...)
	});

	function createRule(endOfLine: string): EndOfLineRule {
		return new EndOfLineRule(new SettingProvider({
			end_of_line: endOfLine
		}, {
			end_of_line: setting
		}), logger);
	}

});
