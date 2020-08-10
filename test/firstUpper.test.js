import { firstUpperCase } from '../common/firstUpper';

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
})
