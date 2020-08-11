import { validIpv4, validIpv6, isIdCard, checkType } from '../common/check';

describe('validIpv4()', () => {
  test('参数 空', () => {
    expect(validIpv4('')).toBe(false);
    expect(validIpv4(0)).toBe(false);
    expect(validIpv4(undefined)).toBe(false);
    expect(validIpv4(null)).toBe(false);
    expect(validIpv4(111122111122)).toBe(false);
  })

  test('参数 124.90.47.67', () => {
    expect(validIpv4('124.90.47.67')).toBe(true);
  })
  test('参数 79.13.7.56', () => {
    expect(validIpv4('79.13.7.56')).toBe(true);
  })
  test('参数 224.109.211.196', () => {
    expect(validIpv4('224.109.211.196')).toBe(true);
  })
})

describe('validIpv6()', () => {

  test('参数 空', () => {
    expect(validIpv6('')).toBe(false);
    expect(validIpv6(0)).toBe(false);
    expect(validIpv6(111122111122)).toBe(false);
    expect(validIpv6(undefined)).toBe(false);
    expect(validIpv6(null)).toBe(false);
  })

  test('2001:0000:1F1F:0000:0000:0100:11A0:ADDF', () => {
    expect(validIpv6('2001:0000:1F1F:0000:0000:0100:11A0:ADDF')).toBe(true)
    expect(validIpv6('1080::8:800:200C:417A')).toBe(true)
    expect(validIpv6('FF01::101')).toBe(true)
  })

  test('参数错误', () => {
    expect(validIpv6({})).toEqual(false)
    expect(validIpv6(() => {})).toEqual(false)
  })
})

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
