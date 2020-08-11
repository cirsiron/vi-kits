import { firstUpperCase, trim } from '../common/string';

describe('firstUpperCase()', () => {
  test('参数为空', () => {
    expect(firstUpperCase()).toBe('');
    expect(firstUpperCase(undefined)).toBe('');
    expect(firstUpperCase(null)).toBe('');
    expect(firstUpperCase(0)).toBe(0);
  })
  test('参数为 str', () => {
    expect(firstUpperCase('str')).toBe('Str');
    expect(firstUpperCase(' str')).toBe(' str');
    expect(firstUpperCase(' str ')).toBe(' str ');
    expect(firstUpperCase('STR')).toBe('STR');
  })
  test('参数为 {}', () => {
    expect(firstUpperCase({})).toEqual({});
  })
  test('参数为 {}', () => {
    expect(firstUpperCase('_abc')).toEqual('_Abc');
  })
})


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

  test('参数 “{}”', () => {
    expect(trim({})).toEqual({})
  })

  test('参数 “ 1233  ”', () => {
    expect(trim(' 1233 ..._s ', 's')).toBe(' 1233 ..._ ')
  })
  test('参数 “ 1233  ”', () => {
    expect(trim('..ss_ 1233 ..._s ')).toBe('..ss_ 1233 ..._s')
  })
})
