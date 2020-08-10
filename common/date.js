import { padLeftZero } from './padLeftZero';

/**
 * 带时分秒的时间 eg： 2020-09-09 00:20:00
 * time: 秒数
 * nil: 空值时,显示的值. 默认为 '-'
 */
export const msToDate = (time, nil) => {
	if(!time) {
		return nil || '-';
	}
	if(typeof time === 'string'){
		return time;
  }
  const dateString = new Date(+new Date(time) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
	return dateString;
}

// 简单的时间 eg: 2020-09-09
export const msToDateSimple = (time, nil) => {
  const dateString = msToDate(time, nil)
	if(typeof dateString === 'string' && dateString === nil){
		return dateString;
  }
  try {
    return dateString.split(' ')[0];
  } catch (e) {
    return dateString;
  }
}

// 时间格式化
export function formatDate (date, fmt) {
  let newDate = new Date(date);
  if (!date || +newDate !== +newDate) {
    return '-';
  }
  fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': newDate.getMonth() + 1,
    'd+': newDate.getDate(),
    'h+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
