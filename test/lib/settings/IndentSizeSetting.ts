import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import IndentSizeSetting = require('../../../lib/settings/IndentSizeSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('IndentSize Setting', () => {

	var setting: IndentSizeSetting;
	var logger: Logger;
	var onWarn: SinonSpyStatic;

	before(() => {
		onWarn = sinon.spy();
		logger = new Logger();
		logger.on('warn', onWarn);
		setting = new IndentSizeSetting(logger);
	});

	afterEach(() => {
		(<any>onWarn).reset();
	});

	it('supports tab setting', () => {
		expect(setting.parse('tab')).to.eq('tab');
		expect(onWarn).to.not.have.been.called;
	});

	it('is undefined and logs a warning when parsing foo', () => {
		expect(setting.parse('foo')).to.be.undefined;
		expect(onWarn).to.have.been.calledOnce;
	});

});
