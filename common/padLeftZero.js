// 数字的左侧添加 0
export const padLeftZero = (num, zeroNum) => {
  if (+num === +num && zeroNum === undefined) {
    return +num < 10 ? '0' + num : num
  };
  if (typeof num !== 'string') {
    return '-';
  }
  // 防止传入错误值导致的异常 如果是非数值型的字符串，置为0
  if (zeroNum <= 0 || +zeroNum !== +zeroNum) {
    zeroNum = 0
  }
  return new Array(zeroNum + 1).join('0') + num;
}
