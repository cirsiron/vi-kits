import { validIpv4, validIpv6 } from '../common/ip';

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
