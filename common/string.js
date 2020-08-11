import { isNil } from './nil';

export const firstUpperCase = (str) => {
  if (isNil(str)) {
    return '';
  }
  if (typeof str !== 'string') return str;
  const [first, ...rest] = str;
  if (first === '_') {
    return first + rest.shift().toUpperCase() + rest.join('');
  } else {
    return first.toUpperCase() + rest.join('');
  }
};

export const trim = (string, chars) => {
  if (isNil(string)) {
    return '';
  }
  if (typeof string !== 'string') {
    return string;
  }
  // 为空是 默认去除前后的空字符串
  if (chars === undefined) {
    return string.replace(/^\s+|\s+$/g, '');
  }
  while (string.indexOf(chars) !== -1) {
    string = string.replace(chars, '');
  }
  return string;
}
