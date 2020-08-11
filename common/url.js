import { validIpv4, validIpv6 } from './ip';

// 获取域名
export const getDomain = () => {
  if (validIpv4(document.domain) || validIpv6(document.domain)) {
    return document.domain;
  }
  const domain = document.domain.match(/(?:(?:https?:\/\/)?(?:www\.)?)?(\S+)/);
  return domain && domain[1] ? domain[1] : domain;
};

// 获取地址栏参数
export const getUrlParam = (paramName) => {
  const urlParams = {};
  const url = location.href;
  const idx = url.indexOf('?');
  if (idx === -1) {
    return;
  }
  let params = url.substring(url.indexOf('?') + 1);
  params = params.split('&');
  for (let i = 0; i < params.length; i++) {
    let item = params[i];
    item = item.split('=');
    urlParams[item[0]] = decodeURIComponent(item[1]);
  }
  if (paramName) {
    return urlParams[paramName];
  }
  return urlParams;
};
