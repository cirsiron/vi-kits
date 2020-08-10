import { trim } from '../common/trim';

describe('trim()', () => {
  test('参数 为空', () => {
    expect(trim()).toBe('')
  })
  test('参数 为空', () => {
    expect(trim(undefined)).toBe('')
  })
  test('参数 为空', () => {
    expect(trim(null)).toBe('')
  })

  test('参数 “ 1233  ”', () => {
    expect(trim(' 1233   ')).toBe('1233')
  })

  test('参数 “ 1233  ”', () => {
    expect(trim(' 1233 ..._s ', '.')).toBe(' 1233 _s ')
  })
  test('参数 “ 1233  ”', () => {
    expect(trim(' 1233 ..._s ', 's')).toBe(' 1233 ..._ ')
  })
  test('参数 “ 1233  ”', () => {
    expect(trim('..ss_ 1233 ..._s ')).toBe('..ss_ 1233 ..._s')
  })
})