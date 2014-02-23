import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import QuoteTypeSetting = require('../../../lib/settings/QuoteTypeSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('QuoteType Setting', () => {

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

	it('supports single setting', () => {
		expect(setting.parse('single')).to.eq('single');
		expect(onWarn).to.not.have.been.called;
	});

	it('supports double setting', () => {
		expect(setting.parse('double')).to.eq('double');
		expect(onWarn).to.not.have.been.called;
	});

	it('supports auto setting', () => {
		expect(setting.parse('auto')).to.eq('auto');
		expect(onWarn).to.not.have.been.called;
	});

	it('is undefined and logs a warning when parsing foo', () => {
		expect(setting.parse('foo')).to.be.undefined;
		expect(onWarn).to.have.been.calledOnce;
	});

});
