
// cookie设置
export { getCookie, setCookie, deleteCookie } from './storage';

// 日期转换
export { msToDate, msToDateSimple } from './date';

/**
 * 文件处理
 * download 文件下载
 */
export { download } from './file';

// 文本首字母大写
export { firstUpperCase } from './string';

// 身份证判断
export { isIdCard } from './check';

// ip判断
export { validIpv4, validIpv6 } from './check';

// 空值判断
export { isNull, isUndef, isEmptyObject, isEmptyStr, isNil } from './nil';

// 基础的四则计算（处理了精度问题）
export { $math } from './math';

// 处理数字 百分比
export { dealPercent, padLeftZero, dealCurrency } from './number';

export {
  printArea // 打印预览
} from './functional';

// 存储
export { session, local } from './storage';

// 去除多余内容
export { trim } from './string';

// 类型判断
export { checkType } from './check';

// url 解析
export { getUrlParam, getDomain } from './url';
