import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import EndOfLineSetting = require('../../../lib/settings/EndOfLineSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('EndOfLine Setting', () => {

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

	it('supports and parses lf setting', () => {
		expect(setting.parse('lf')).to.eq('lf');
		expect(onWarn).to.not.have.been.called;
	});

	it('supports and parses crlf setting', () => {
		expect(setting.parse('crlf')).to.eq('crlf');
		expect(onWarn).to.not.have.been.called;
	});

	it('is undefined and logs a warning when parsing foo', () => {
		expect(setting.parse('foo')).to.be.undefined;
		expect(onWarn).to.have.been.calledOnce;
	});

});
