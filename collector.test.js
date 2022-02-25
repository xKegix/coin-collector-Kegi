const coinCollector = require('./collector');
const coins = require('./coins');

describe('coinCollector', () => {
  it('is a function', () => {
    expect(typeof coinCollector).toBe('function');
  });
  
  it('returns a new array', () => {
    expect(coinCollector([])).toEqual([]);
  });

  it('returned array only contains coins', () => {
    expect(coinCollector(['dime', 'dollar'])).toEqual(['dime']);
  });

  it('filters multiple items', () => {
    expect(coinCollector(['dime', 'hundred', 'nickel', 'penny', 'dollar'])).toEqual(['dime', 'nickel', 'penny']);
  });
  
  it('filters original array', () => {
    expect(coinCollector(coins)).toEqual([
      'quarter',
      'dime',
      'nickel',
      'penny'
    ]);
  });
});