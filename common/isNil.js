
export const isUndef = (val) => {
  return val === undefined;
};

export const isNull = val => {
  return val === null;
};

export const isEmptyStr = (val) => {
  return val === '';
};

/*
 * @description 校验对象是否为空
 */
export const isNil = obj => {
  return isUndef(obj) || isNull(obj) || isEmptyStr(obj);
};

// 判断是否为空对象 => {}
export const isEmptyObject = (obj) => {
  if (!obj) {
    return false;
  }
  try {
    return JSON.stringify(obj) === '{}';
  } catch (e) {
    return false;
  }
};
