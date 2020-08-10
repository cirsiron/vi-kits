import { isNil } from './isNil';

// localStorage
export const local = {
  get (key) {
    if (isNil(key)) {
      return;
    }
    const val = localStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
    return val;
  },
  set (key, value) {
    if (isNil(key)) {
      return;
    }
    if (typeof value !== 'string') {
      value
    }
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const session = {
  get (key) {
    if (isNil(key)) {
      return;
    }
    return sessionStorage.getItem(key);
  }
}

