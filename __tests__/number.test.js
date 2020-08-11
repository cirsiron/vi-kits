
import { dealCurrency, padLeftZero, dealPercent } from '../common/number';

describe('padLeftZero()', () => {
  test('参数为空', () => {
    expect(padLeftZero()).toBe('-');
    expect(padLeftZero(undefined)).toBe('-');
    expect(padLeftZero(null)).toBe('-');
    expect(padLeftZero('')).toBe('-');
    expect(padLeftZero(0)).toBe(0);
  })

  test('参数为 1', () => {
    expect(padLeftZero(1)).toBe('01');
    expect(padLeftZero('1')).toBe('01');
    expect(padLeftZero('002')).toBe('0002');
    expect(padLeftZero({})).toBe('-');
    expect(padLeftZero(() => {})).toBe('-');

    expect(padLeftZero(-1)).toBe(-1);
  })

  test('参数为 1, 2', () => {
    expect(padLeftZero(1, 2)).toBe('001');
    expect(padLeftZero('01', 2)).toBe('0001');
    expect(padLeftZero('002', 3)).toBe('000002');
    expect(padLeftZero('002', 0)).toBe('002');
    expect(padLeftZero('2', 0)).toBe('2');
    expect(padLeftZero(2, 0)).toBe('2');
    expect(padLeftZero({})).toBe('-');
    expect(padLeftZero(() => {})).toBe('-');

    expect(padLeftZero(-1)).toBe(-1);
  })
})

describe('dealCurrency()', () => {
  test('参数为空 应为 -', () => {
    expect(dealCurrency()).toBe('-')
  })
  test('参数为空 应为 -1', () => {
    expect(dealCurrency(-1)).toBe('-1')
  })
  test('参数为空 应为 -1.23万', () => {
    expect(dealCurrency(-12345.22)).toBe('-1.23万')
  })
  test('参数为空 应为 -1.23万', () => {
    expect(dealCurrency(-12345.22, true)).toBe('-1.23万')
  })
  test('参数为100.1 应为 100.1', () => {
    expect(dealCurrency(100.1)).toBe('100.1')
  })
  test('参数为100.1 应为 100.1', () => {
    expect(dealCurrency(100.1, true)).toBe('100.10')
  })
  test('参数为10000.1 应为 1万', () => {
    expect(dealCurrency(10000.1)).toBe('1万')
  })
  test('参数为10000.1 应为 1.00万万', () => {
    expect(dealCurrency(10000.1, true)).toBe('1.00万')
  })
  test('参数为123456789.01 应为 1.23亿', () => {
    expect(dealCurrency(123456789.01)).toBe('1.23亿')
  })
  test('参数为100000000.01 应为 1.00亿', () => {
    expect(dealCurrency(100000000.01, true)).toBe('1.00亿')
  })
  test('参数为100000000.01 应为 1.00亿', () => {
    expect(dealCurrency(100000000.00)).toBe('1亿')
  })
  test('参数为100000000.01 应为 1.00亿', () => {
    expect(dealCurrency(100000000.00, true)).toBe('1.00亿')
  })
  test('参数为"123" 应为 -', () => {
    expect(dealCurrency('123')).toBe('-')
  })
  test('参数为 undefined 应为 -', () => {
    expect(dealCurrency(undefined)).toBe('-')
  })
  test('参数为 null 应为 -', () => {
    expect(dealCurrency(null)).toBe('-')
  })
  test('参数为 aaa 应为 -', () => {
    expect(dealCurrency('aaa')).toBe('-')
  })
})

describe('dealPercent()', () => {
  test('dealPercent()', () => {
    expect(dealPercent()).toBe('-');
    expect(dealPercent(0)).toBe('0.00');
    expect(dealPercent(0.001)).toBe('0.10');
    expect(dealPercent(0.01)).toBe('1.00');
    expect(dealPercent(0.1)).toBe('10.00');
    expect(dealPercent(1.0)).toBe('100.00');
    expect(dealPercent(1.2)).toBe('120.00');
    expect(dealPercent(12.0)).toBe('1200.00');
    expect(dealPercent(12)).toBe('1200.00');
    expect(dealPercent(1234)).toBe('123400.00');
  })

  test('dealPercent(x, true)', () => {
    expect(dealPercent(undefined, true)).toBe('-');
    expect(dealPercent(0, true)).toBe('0.00%');
    expect(dealPercent(0.001, true)).toBe('0.10%');
    expect(dealPercent(0.01, true)).toBe('1.00%');
    expect(dealPercent(0.1, true)).toBe('10.00%');
    expect(dealPercent(1.0, true)).toBe('100.00%');
    expect(dealPercent(1.2, true)).toBe('120.00%');
    expect(dealPercent(12.0, true)).toBe('1200.00%');
    expect(dealPercent(12, true)).toBe('1200.00%');
    expect(dealPercent(1234, true)).toBe('123400.00%');
  })
})
