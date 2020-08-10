import { isNil } from '../common/isNil';

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
