import { expect } from 'chai';
import { describe, it } from 'mocha';
import fizzBuzz from '../src/fizzBuzz';

describe('fizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the number when not multiple of 3 and 5', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
    expect(fizzBuzz(8)).to.be.equal(8);
  });
});
