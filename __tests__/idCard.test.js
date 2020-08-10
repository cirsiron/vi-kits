import { isIdCard } from '../common/idCard';

describe('isIdCard()', () => {
  test('参数为空', () => {
    expect(isIdCard()).toBe(false)
    expect(isIdCard(undefined)).toBe(false)
    expect(isIdCard(null)).toBe(false)
    expect(isIdCard('')).toBe(false)
  })
  test('参数为正确时', () => {
    expect(isIdCard(110101199901011128)).toBe(true)
    expect(isIdCard(110101901011128)).toBe(true)

    expect(isIdCard(123456789123456789)).toBe(false)
  })
  test('参数为错误时', () => {
    expect(isIdCard(110101199901012)).toBe(false)
    expect(isIdCard(123355)).toBe(false)
  })
})
