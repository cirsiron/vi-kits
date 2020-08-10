import { isNil } from '../common/isNil';

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
