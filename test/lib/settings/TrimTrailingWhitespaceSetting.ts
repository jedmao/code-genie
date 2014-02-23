﻿import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
import sinon = require('sinon');
import TrimTrailingWhitespaceSetting = require('../../../lib/settings/TrimTrailingWhitespaceSetting');
import Logger = require('../../../lib/Logger');


// ReSharper disable WrongExpressionStatement
describe('TrimTrailingWhitespace Setting', () => {

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

	it('supports and parses true setting', () => {
		expect(setting.parse(true)).to.be.true;
		expect(setting.parse(1)).to.be.true;
		expect(setting.parse('foo')).to.be.true;
		expect(onWarn).to.not.have.been.called;
	});

	it('supports and parses false setting', () => {
		expect(setting.parse(false)).to.be.false;
		expect(setting.parse(0)).to.be.false;
		expect(onWarn).to.not.have.been.called;
	});

});
