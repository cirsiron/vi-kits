// 导出excel文件
export const download = (url) => {
  if (!url) {
    return false;
  }
  const downloadElement = document.createElement('a');
  const href = window.URL.createObjectURL(url); // 创建下载的链接
  downloadElement.href = href;
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放blob对象
};