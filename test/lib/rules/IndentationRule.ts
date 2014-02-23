import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import IndentStyleSetting = require('../../../lib/settings/IndentStyleSetting');
import IndentSizeSetting = require('../../../lib/settings/IndentStyleSetting');
import IndentationRule = require('../../../lib/rules/IndentationRule');
import Logger = require('../../../lib/Logger');
import SettingProvider = require('../../../lib/settings/SettingProvider');


// ReSharper disable WrongExpressionStatement
describe('Indentation Rule', () => {
	
	var indentStyleSetting: IndentStyleSetting;
	var indentSizeSetting: IndentSizeSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		indentStyleSetting = new IndentStyleSetting(logger);
		indentSizeSetting = new IndentSizeSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	describe('indent_style=tab', () => {

		it.skip('enforces tab indentation', () => {
			var rule = createRule('tab');
			// TODO: rule.fix(...)
		});

	});

	describe('indent_style=space', () => {

		it.skip('enforces 4-space indentation when indent_size=4', () => {
			var rule = createRule('space', 4);
			// TODO: rule.fix(...)
		});

		it.skip('enforces 2-space indentation when indent_size=2', () => {
			var rule = createRule('space', 2);
			// TODO: rule.fix(...)
		});

		describe('indent_size=tab', () => {

			it.skip('enforces 5-space indentation when tab_width=5', () => {
				var rule = createRule('space', 'tab', 5);
				// TODO: rule.fix(...)
			});

		});

	});

	describe('indent_style=undefined', () => {

		it.skip('enforces 3-space indentation when indent_size=3', () => {
			var rule = createRule(undefined, 3);
			// TODO: rule.fix(...)
		});

		it.skip('enforces minification when indent_size=0', () => {
			var rule = createRule(undefined, 0);
			// TODO: rule.fix(...)
		});

	});

	function createRule(indentStyle: string, indentSize?: any, tabWidth?: number): IndentationRule {
		return new IndentationRule(new SettingProvider({
			indent_style: indentStyle,
			indent_size: indentSize,
			tab_width: tabWidth
		}, {
			indent_style: indentStyleSetting,
			indent_size: indentSizeSetting
		}), logger);
	}

});
