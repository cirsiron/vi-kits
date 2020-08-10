import { checkType } from '../common/typeCheck';

describe('checkType()', () => {
  test('参数', () => {
    expect(checkType(undefined)).toBe(true);
    expect(checkType(null)).toBe(false);
    expect(checkType(1)).toBe(false);


    expect(checkType({}, 'object')).toBe(true);
    expect(checkType({}, 'Object')).toBe(true);
    expect(checkType({}, 'qbject')).toBe(false);

    expect(checkType(1, 'number')).toBe(true);
    expect(checkType('1', 'number')).toBe(false);
    expect(checkType(undefined, 'number')).toBe(false);
    expect(checkType(undefined, undefined)).toBe(true);
    expect(checkType(undefined, 'undefined')).toBe(true);
    expect(checkType(null, undefined)).toBe(false);
    expect(checkType(null, null)).toBe(true);
    expect(checkType(null, 'null')).toBe(true);
    expect(checkType(0, 'number')).toBe(true);
    expect(checkType('', 'number')).toBe(false);
    expect(checkType('', 'string')).toBe(true);
    expect(checkType('', 'String')).toBe(true);

    expect(checkType(() => {}, 'function')).toBe(true);
    expect(checkType(() => {}, 'Function')).toBe(true);

    expect(checkType(/a/, 'regexp')).toBe(true);
    expect(checkType(/a/, 'Regexp')).toBe(true);

    expect(checkType(true, 'boolean')).toBe(true);
    expect(checkType(false, 'Boolean')).toBe(true);
  
    expect(checkType([], 'array')).toBe(true);
    expect(checkType([], 'Array')).toBe(true);
  })
});