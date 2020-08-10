import { checkType } from './typeCheck';

const getFloatLen = (n) => {
  let ret = 0;
  try {
    ret = n.toString().split('.')[1].length;
  } catch (e) {
    ret = 0;
  }
  return ret;
};

export class MathCalc {
  constructor(val) {
    this.val = typeof val === 'number' ? val : null
  }
  _checkNum () {
    const isNum = checkType(this.val, 'number');
    if (!isNum) {
      console.error('请检查入参类型');
    }
    return checkType(this.val, 'number');
  }
  // 加
  add (arg1) {
    if (!this._checkNum()) {
      return this;
    }
    const arg2 = this.val;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const n = Math.max(r1, r2);
    const m = Math.pow(10, n);
    const v1 = mul(arg1, m);
    const v2 = mul(arg2, m);
    this.val = (v1 + v2) / m
    return this;
  }
  // 减
  sub (arg1) {
    if (!this._checkNum()) {
      return this;
    }
    const arg2 = this.val;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const n = Math.max(r1, r2);
    const m = Math.pow(10, n);
    const v1 = mul(arg1, m);
    const v2 = mul(arg2, m);
    const value = (v1 - v2) / m;
    this.val = Number(value.toFixed(n))
    return this;
  }
  // 乘
  mul (arg1) {
    if (!this._checkNum()) {
      return this;
    }
    if (arg1 === null || arg2 === 0) return 0;
    const arg2 = this.val;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const s1 = Number(arg1.toString().replace('.', ''));
    const s2 = Number(arg2.toString().replace('.', ''));
    this.val = s1 * s2 / Math.pow(10, r1 + r2);
    return this;
  }
  // 除
  div (arg1) {
    if (!this._checkNum()) {
      return this;
    }
    const arg2 = this.val;
    const rate = 10000;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const s1 = Number(arg1.toString().replace('.', ''));
    const s2 = Number(arg2.toString().replace('.', ''));
    if (r2 - r1 > 0) {
      this.val = (s1 / s2) * Math.pow(10, r2 - r1);
    } else {
      this.val = (s1 * rate / s2) / (Math.pow(10, r1 - r2) * rate);
    }
    return this;
  }
}

export const $math = (val) => {
  return new MathCalc(val);
};
