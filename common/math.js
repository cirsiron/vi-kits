import { checkType } from './typeCheck';
import { isNil } from '../common/isNil';

/**
 * 移位函数
 * 需要移动的值
 * 移动的位数 正为右移 负为左移
 */
export const displacement = (target, num) => {
  if (isNil(target)) {
    return null;
  }
  if (+target !== +target) {
    return null;
  }
  if (!num) {
    return target;
  }
  const plusMinus = [];
  if (target < 0) {
    target = Math.abs(target)
    plusMinus.push('-')
  }
  const targetList = target.toString().split('.');
  const target1 = targetList[0];
  const target_1 = targetList[1] || '0';
  // 左移位
  if (num < 0) {
    // [5, 4] -1 => 5.4
    let resList = target1.split('');
    if (resList.length > Math.abs(num)) {
      resList.splice(target1.length + num, 0, '.');
      const res = resList.concat(target_1)
      return +plusMinus.concat(res).join('');
    }
    // [5, 4] -3  => 0.054
    let padNum = Math.abs(target1.length + num) + 1;
    while(padNum--) {
      resList.unshift('0');
    }
    resList.splice(1 , 0, '.');
    const res = resList.concat(target_1);
    return +plusMinus.concat(res).join('');
  }
  // 右移位
  // 0.54 > 1 => 5.4
  let resList1 = target_1.split('');
  if (resList1.length > num) {
    resList1.splice(num, 0, '.');
    const res = target1.split('').concat(resList1);
    return +plusMinus.concat(res).join('');
  } else {
    // 0.54 3 => 540
    let cache = num;
    while (cache--) {
      resList1.push('0');
    }
    resList1.splice(num, 0, '.');
    const res = target1.split('').concat(resList1);
    return +plusMinus.concat(res).join('');
  }
}

export const getFloatLen = (n) => {
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
    this.val = +val === +val ? val : null;
  }
  _checkNum () {
    if (isNil(this.val)) {
      return false;
    }
    const isNum = checkType(this.val, 'number');
    return isNum;
  }
  // 加
  add (arg2) {
    if (!this._checkNum()) {
      return this;
    }
    if (arg2 === 0) {
      return this;
    }
    const arg1 = this.val;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const n = Math.max(r1, r2);
    
    const v1 = displacement(arg1, n);
    const v2 = displacement(arg2, n);
    this.val = displacement(v1 + v2, -n);
    return this;
  }
  // 减
  sub (arg2) {
    if (!this._checkNum()) {
      return this;
    }
    if (arg2 === 0) {
      return this;
    }
    const arg1 = this.val;
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const n = Math.max(r1, r2);
    const v1 = displacement(arg1, n);
    const v2 = displacement(arg2, n);
    const value = displacement(v1 - v2, -n);
    this.val = value
    return this;
  }
  // 乘
  mul (arg2) {
    if (!this._checkNum()) {
      return this;
    }
    const arg1 = this.val;
    if (arg2 === null || arg1 === 0 || arg2 === 0) {
      this.val = 0;
      return this;
    };
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const s1 = Number(arg1.toString().replace('.', ''));
    const s2 = Number(arg2.toString().replace('.', ''));
    this.val = displacement(s1 * s2, -(r1 + r2));
    return this;
  }
  // 除
  div (arg2) {
    if (!this._checkNum()) {
      return this;
    }
    if (arg2 === 0) {
      this.val = Infinity;
      return this;
    }
    const arg1 = this.val;
    if (arg1 === 0) {
      this.val = 0;
      return this;
    }
    const r1 = getFloatLen(arg1);
    const r2 = getFloatLen(arg2);
    const s1 = Number(arg1.toString().replace('.', ''));
    const s2 = Number(arg2.toString().replace('.', ''));
    if (r2 - r1 > 0) { // 0.01 0.001 => 10 1
      this.val = displacement(s1, r2 - r1) / s2;
    } else { // 0.001 0.01 => 1 10
      this.val =  displacement(s1 / s2, r2 - r1);
    }
    return this;
  }
}

export const $math = (val) => {
  return new MathCalc(val);
};
