import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import QuoteTypeSetting = require('../../../lib/settings/QuoteTypeSetting');
import QuoteTypeRule = require('../../../lib/rules/QuoteTypeRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('QuoteType Rule', () => {

	var setting: QuoteTypeSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new QuoteTypeSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it.skip('single: enforces single quotes on string literals', () => {
		var rule = createRule('single');
		// TODO: rule.fix(...)
	});

	it.skip('double: enforces double quotes on string literals', () => {
		var rule = createRule('double');
		// TODO: rule.fix(...)
	});

	it.skip('auto: enforces most efficient quote type for string literals', () => {
		var rule = createRule('auto');
		// TODO: rule.fix(...)
	});

	function createRule(quoteType: string): QuoteTypeRule {
		return new QuoteTypeRule(new SettingProvider({
			quote_type: quoteType
		}, {
			quote_type: setting
		}), logger);
	}

});
