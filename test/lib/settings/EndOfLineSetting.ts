import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import EndOfLineSetting = require('../../../lib/settings/EndOfLineSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('EndOfLineSetting', () => {

	var setting: EndOfLineSetting;
	var logger: Logger;
	var onWarn: SinonSpyStatic;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new EndOfLineSetting(logger);
	});

	afterEach(() => {
		(<any>onWarn).reset();
	});

	it('should parse lf', () => {
		expect(setting.parse('lf')).to.eq('\n');
		expect(onWarn).to.not.have.been.called;
	});

	it('should parse crlf', () => {
		expect(setting.parse('crlf')).to.eq('\r\n');
		expect(onWarn).to.not.have.been.called;
	});

	it('should be undefined and log a warning when parsing foo', () => {
		expect(setting.parse('foo')).to.be.undefined;
		expect(onWarn).to.have.been.calledOnce;
	});

});
