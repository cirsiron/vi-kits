import { padLeftZero } from "../common/padLeftZero";

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