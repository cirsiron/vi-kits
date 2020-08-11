import { isNil } from './nil';

// 后端返回的数据转换为百分数，并且处理.00的情况
export const dealPercent = (num, showPercent = false) => {
  if (!num && num !== 0) return '-';
  num = num || 0;
  let percentNum = (num * 100).toFixed(2);
  if (showPercent) {
    percentNum = percentNum + '%';
  }
  return percentNum;
};

// 数字的左侧添加 0
export const padLeftZero = (num, zeroNum) => {
  if (isNil(num)){
    return '-';
  }
  if (num <= 0) {
    return num;
  }
  if (+num === +num && zeroNum === undefined) {
    return +num < 10 ? '0' + num : num
  };
  if (typeof num !== 'string' && +num !== +num) {
    return '-';
  }
  return new Array(zeroNum + 1).join('0') + num;
}

// 处理货数字，如果返回的数是5位以下，直接显示数字，如果是5位以上，显示保留两位小数的以万为单位的数字，如果是9位以上，显示保留两位小数的以亿为单位的数字
// 处理，这里如果出现5.00万这种情况，则会改成5万，如果要5.00万则调用底下的 dealCurrencyDecimal;
// zeroDecimal为true，则需要返回5.00万，如果为false，则返回5万。
export const dealCurrency = (num, zeroDecimal) => {
  if (typeof num !== 'number') return '-';
  let symbol = '';
  if (num < 0) {
    symbol = '-';
    num = Math.abs(num);
  }
  let str = num + '';
  const number = parseFloat(num);
  if (str.indexOf('.') > -1) {
    const numArr = str.split('.');
    if (numArr[0].length < 5 && !zeroDecimal) return symbol + str;
    str = numArr[0];
  }
  // 返回5万这种
  const s = '.00';
  if (str.length >= 9) {
    const n = (number / 10e7).toFixed(2);
    if ((n.indexOf(s) > -1) && !zeroDecimal) return symbol + Math.floor(n) + '亿'; // 没有.00
    return symbol + n + '亿'; // 有.00
  }
  if (str.length >= 5) {
    const n = (number / 10e3).toFixed(2);
    if ((n.indexOf(s) > -1) && !zeroDecimal) return symbol + Math.floor(n) + '万';
    return symbol + n + '万';
  }
  if (zeroDecimal) {
    const n = (Math.round(number * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
    return symbol + n + '';
  }
  return symbol + number + '';
};
