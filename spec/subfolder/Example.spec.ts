import Example from 'subfolder/Example';
import { expect } from 'chai';

describe('Example', () => {
  it('should increment count', () => {
    const example = new Example();

    expect(example.count).to.equal(0);

    example.increment();

    expect(example.count).to.equal(1);
  });
});