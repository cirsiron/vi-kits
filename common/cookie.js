import Cookies from 'js-cookie';
import { isNil } from './isNil';
import { getDomain } from './domain';

/*
 * 获取cookie
 */
export const getCookie = name => {
  if (name === undefined) {
    // 获取全部
    return Cookies.get();
  }
  return Cookies.get(name, {
    domain: getDomain()
  });
};

const chromeVersion = () => {
  var ua = window.navigator.userAgent;
  if (ua) {
    var flag = /Chrome\/([0-9]+)/.exec(ua);
    if (flag && flag.length > 1) {
      return flag[1];
    }
  }
  return '';
};
/*
 * 设置cookie
 * 默认过期7天
 */
export const setCookie = (name='', value='', cookieSetting={}) => {
  if (isNil(name) || isNil(value)) {
    return;
  }
  const version = chromeVersion();
  const protocol = window.location.protocol;
  const currentCookieSetting = {
    expires: 7,
    domain: getDomain()
  };
  // chrome 80 以上，且 https 修复谷歌80版本以上的cookie问题
  if (+version >= 80 && protocol === 'https:') {
    currentCookieSetting.SameSite = 'None; Secure';
  }
  Object.assign(currentCookieSetting, cookieSetting);
  Cookies.set(name, value, currentCookieSetting);
};

/**
 * 删除cookie
 */
export const deleteCookie = (name) => {
  Cookies.remove(name, {
    domain: getDomain()
  });
};

export const cookies = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie,
  remove: deleteCookie
};
