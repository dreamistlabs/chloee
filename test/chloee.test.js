import 'babel-polyfill';

import { expect } from 'chai';
import Chloee from '../src/lib/Chloee';
import chloee from '../src/index';

const HEX_TESTS = {
  case1: { 'hex': 'abcdef', 'rgb': '171,205,239' },
  case2: { 'hex': 'c470ee', 'rgb': '196,112,238' },
  case3: { 'hex': '999999', 'rgb': '153,153,153' },
  case4: { 'hex': 'ebd928', 'rgb': '235,217,40' },
  case5: { 'hex': '10de84', 'rgb': '16,222,132' },
  case6: { 'hex': 'ffffff', 'rgb': '255,255,255' },
  case7: { 'hex': 'af9004', 'rgb': '175,144,4' },
  case8: { 'hex': 'c003d9', 'rgb': '192,3,217' },
  case9: { 'hex': 'ee0066', 'rgb': '238,0,102' },
  case10: { 'hex': '000000', 'rgb': '0,0,0' }
}

describe('new Chloee instance', () => {
  it('should return Missing Argument Error if argument is missing', () => {
    expect(function() {
      new Chloee();
    }).to.throw(Error, /Missing Argument/i);
  });
  it('should return Type Error if argument is not a string', () => {
    expect(function() {
      new Chloee(999999);
    }).to.throw(Error, /Type Error/i);
  });
  it('should return Format Error if HEX contains invalid letters', () => {
    expect(function() {
      new Chloee('abcghi');
    }).to.throw(Error, /Format Error/i);
  });
  it('should return Format Error if HEX is a negative value', () => {
    expect(function() {
      new Chloee('-777777');
    }).to.throw(Error, /Format Error/i);
  });
  it('should return Format Error if RGB has value greater than 255', () => {
    expect(function() {
      new Chloee('279, 200, 200');
    }).to.throw(Error, /Format Error/i);
  });
  it('should return Format Error if RGB contains letters', () => {
    expect(function() {
      new Chloee('135, abc, 200');
    }).to.throw(Error, /Format Error/i);
  });
  it('should return Format Error if RGB contains negative numbers', () => {
    expect(function() {
      new Chloee('-135, -5, 200');
    }).to.throw(Error, /Format Error/i);
  });
});

describe('#convert', () => {
  for (let test in HEX_TESTS) {
    describe(`given a hex value of ${HEX_TESTS[test].hex}`, () => {
      const result = chloee(HEX_TESTS[test].hex);

      it(`should return ${HEX_TESTS[test].rgb}`, () => {
        expect(result).to.equal(HEX_TESTS[test].rgb);
      });
    });
  }

  for (let test in HEX_TESTS) {
    describe(`given an rgb value of ${HEX_TESTS[test].rgb}`, () => {
      const result = chloee(HEX_TESTS[test].rgb);

      it(`should return ${HEX_TESTS[test].hex}`, () => {
        expect(result).to.equal(HEX_TESTS[test].hex);
      });
    });
  }
});