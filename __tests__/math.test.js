import { $math, displacement } from '../common/math';

describe('displacement()', () => {
  test('参数为负', () => {
    expect(displacement(0.2, -1)).toBe(0.02);
    expect(displacement(0.2, -2)).toBe(0.002);
    expect(displacement(0.2, -8)).toBe(0.000000002);
    expect(displacement(0.123, -2)).toBe(0.00123);
    expect(displacement(1, -2)).toBe(0.01);
    expect(displacement(1000, -2)).toBe(10);

    expect(displacement(-1, -2)).toBe(-0.01);
    expect(displacement(-0.1, -2)).toBe(-0.001);
    expect(displacement(-0.100, -2)).toBe(-0.001);

    expect(displacement({}, -2)).toBe(null);
  })
  test('参数为负', () => {
    expect(displacement(0.2, 1)).toBe(2);
    expect(displacement(0.2, 2)).toBe(20);
    expect(displacement(0.2, 8)).toBe(20000000);
    expect(displacement(0.123, 2)).toBe(12.3);
    expect(displacement(1, 2)).toBe(100);
    expect(displacement(1000, 2)).toBe(100000);

  })
  test('参数为正', () => {
    expect(displacement(-1, 2)).toBe(-100);
    expect(displacement(-0.1, 2)).toBe(-10);
    expect(displacement(-0.100, 2)).toBe(-10);
    expect(displacement(-0.100, 9)).toBe(-100000000);

    expect(displacement({}, 2)).toBe(null);

    expect(displacement({})).toBe(null);
    expect(displacement('')).toBe(null);
    expect(displacement(0)).toBe(0);
  })
})

describe('math()', () => {
  test('$math mul', () => {
    expect($math('').mul(0.2).val).toBe('');
    expect($math(0).mul(0.2).val).toBe(0);
    expect($math(10).mul(28).val).toBe(280);
    expect($math(10).mul(28).div(20).val).toBe(14);
    expect($math(20).mul(28).div(10).div(28).val).toBe(2);
    expect($math(10).mul(28).val).toBe(280);
    expect($math(45.6).mul(13).val).toBe(592.8);
    // 86.24000000000001
    expect($math(12.32).mul(7).val).toBe(86.24);

    expect($math(12.32).mul(0).val).toBe(0);
    expect($math(12.32).mul(0).getVal()).toBe(0);
  })
  test('$math add', () => {
    expect($math(0.1).add(0.2).val).toBe(0.3);
    expect($math(0.7).add(0.1).val).toBe(0.8);
    expect($math(26.08).add(22).val).toBe(48.08);
    expect($math('').add(0.2).val).toBe('');
    expect($math(1).add(0).val).toBe(1);
    expect($math(1).add(0).getVal()).toBe(1);
  })

  test('$math div', () => {
    expect($math({}).div(0.2).val).toBe(null);
    expect($math('').div(0.2).val).toBe('');
    expect($math(0).div(0.2).val).toBe(0);
    expect($math('').div(0).val).toBe('');
    expect($math(1).div(0).val).toBe(Infinity);
    expect($math(0.003).div(0.2).val).toBe(0.015);
    expect($math(0.03).div(0.002).val).toBe(15);
    expect($math(268.34).div(0.83).val).toBe(323.30120481927713);
    // 8.80 * 100 * 12 / 100 =>105.60000000000002
    expect($math(8.80).mul(100).mul(12).div(100).val).toBe(105.6);
    // 16.40 * 1000000 * 6 / 1000000 => 98.39999999999999
    expect($math(16.40).mul(1000000).mul(6).div(1000000).val).toBe(98.4);
    expect($math(16.40).mul(1000000).mul(6).div(1000000).getVal()).toBe(98.4);
  })

  test('$math sub', () => {
    expect($math('').sub(0.1).val).toBe('');
    expect($math(0.3).sub(0.1).val).toBe(0.2);
    expect($math(3).sub(1).val).toBe(2);
    expect($math(-3).sub(1).val).toBe(-4);
    expect($math(-3).sub(-1).val).toBe(-2);
    expect($math(1).sub(0).val).toBe(1);
    expect($math(1).sub(0).getVal()).toBe(1);
  })
})
