
import { dealCurrency } from '../common/currency';

describe('dealCurrency()', () => {
  test('参数为空 应为 -', () => {
    expect(dealCurrency()).toBe('-')
  })
  test('参数为100.1 应为 100.1', () => {
    expect(dealCurrency(100.1)).toBe('100.1')
  })
  test('参数为10000.1 应为 1万', () => {
    expect(dealCurrency(10000.1)).toBe('1万')
  })
  test('参数为123456789.01 应为 1.23亿', () => {
    expect(dealCurrency(123456789.01)).toBe('1.23亿')
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
