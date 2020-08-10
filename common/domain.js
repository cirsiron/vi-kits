import { validIpv4, validIpv6 } from './ip';

// 获取域名
export const getDomain = () => {
  if (validIpv4(document.domain) || validIpv6(document.domain)) {
    return document.domain;
  }
  return `.${document.domain
    .split('.')
    .slice(-2)
    .join('.')}`;
};
