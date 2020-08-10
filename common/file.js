// 导出excel文件
export const download = (res) => {
  if (!res) {
    return false;
  }
  const blob = new Blob([res.data], { type: '' });
  const downloadElement = document.createElement('a');
  const href = window.URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  const filenameHeader = res.headers['content-disposition'];
  const filename = filenameHeader.substring(filenameHeader.indexOf('=') + 1, filenameHeader.length);
  downloadElement.download = decodeURIComponent(filename); // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放blob对象
};