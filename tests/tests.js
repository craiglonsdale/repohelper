'use strict'; //eslint-disable-line

const expect = require('chai').expect;

describe('RepoHelper', () => {
  describe('print module', () => {
    let stdoutWrite;
    let log;
    before(() => {
      stdoutWrite = process.stdout.write;
      process.stdout.write = (message) => {
        log.push(message);
      };
    });
    beforeEach(() => log = []);
    afterEach(() => log = []);
    after(() => process.stdout.write = stdoutWrite);
    const print = require('../lib/print');
    it('Should write to stdout', () => {
      print('Hello world', true);
      expect(log.slice(2).join('')).to.eql('Hello world\n');
    });
    it('should obey the conditional flag', () => {
      print('Hello world', false);
      expect(log.length).to.eql(0);
    });
    it('should concatenate an array', () => {
      print(['Hello', ' ', 'world'], true);
      expect(log.slice(-1).toString()).to.eql('Hello world\n');
    });
  });
});
