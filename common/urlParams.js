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