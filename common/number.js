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
