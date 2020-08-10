
// cookie设置
export { getCookie, setCookie, deleteCookie } from './common/cookie';

// 数字转换 万亿等
export { dealCurrency } from './common/currency';

// 日期转换
export { msToDate, msToDateSimple } from './common/date';

// 主域名获取
export { getDomain } from './common/domain';

// 文件处理
/**
 * download 文件下载
 */
export { download } from './common/file';

// 文本首字母大写
export { firstUpperCase } from './common/firstUpper';

// 身份证判断
export { isIdCard } from './common/idCard';

// ip判断
export { validIpv4, validIpv6 } from './common/ip';

// 空值判断
export { isNull, isUndef, isEmptyObject, isEmptyStr, isNil } from './common/isNil';

// 基础的四则计算（处理了精度问题）
export { $math } from './common/math';

// 处理数字 百分比
export { dealPercent } from './common/number';

// 数字左侧补位0
export { padLeftZero } from './common/padLeftZero';

// 打印预览
export { printArea } from './common/printArea';

// 存储
export { session, local } from './common/storage';

// 去除多余内容
export { trim } from './common/trim';

// 类型判断
export { checkType } from './common/typeCheck';

// url 解析
export { getUrlParam } from './common/urlParams';
