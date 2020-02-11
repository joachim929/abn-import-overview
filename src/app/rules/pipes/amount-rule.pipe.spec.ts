import { AmountRulePipe } from './amount-rule.pipe';

describe('AmountPipe', () => {
  it('create an instance', () => {
    const pipe = new AmountRulePipe();
    expect(pipe).toBeTruthy();
  });
});
