import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import IndentStyleSetting = require('../../../lib/settings/IndentStyleSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('IndentStyle Setting', () => {

	var setting: IndentStyleSetting;
	var logger: Logger;
	var onWarn: SinonSpy;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new IndentStyleSetting(logger);
	});

	afterEach(() => {
		onWarn.reset();
	});

	it('supports tab setting', () => {
		expect(setting.parse('tab')).to.eq('tab');
		expect(onWarn).to.not.have.been.called;
	});

	it('supports space setting', () => {
		expect(setting.parse('space')).to.eq('space');
		expect(onWarn).to.not.have.been.called;
	});

	it('is undefined and logs a warning when parsing foo', () => {
		expect(setting.parse('foo')).to.be.undefined;
		expect(onWarn).to.have.been.calledOnce;
	});

});
