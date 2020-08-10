
function _removePrintArea(id) {
  const iframeNode = document.getElementById(id);
  if(!iframeNode) {
      return;
  }
  iframeNode.parentNode.removeChild(iframeNode);
}

// 做计数用
let _printAreaCount = 0;
// 主文件
const printArea = (ele, callback) => {
  let idPrefix = 'printArea_';
  // 保持当前只有一个上一个需要移除
  _removePrintArea(idPrefix + _printAreaCount);
  _printAreaCount++;
  
  var iframeId = idPrefix + _printAreaCount;
  var iframe = document.createElement('IFRAME');

  iframe.id = iframeId;
  iframe.style.position = 'absolute';
  iframe.style.width = '0px';
  iframe.style.height = ':0px';
  iframe.style.left = '-500px';
  iframe.style.top = '-500px';
  
  document.body.appendChild(iframe);
  var doc = iframe.contentWindow.document;
  var className = ele.className;
  doc.write('<div class="' + className + '">' + ele.innerHTML || ele
          + '</div>');
  doc.close();
  var frameWindow = iframe.contentWindow;
  frameWindow.close();
  frameWindow.focus();
  frameWindow.addEventListener('load', function() {
      callback && callback(frameWindow);
      if (!callback) {
          frameWindow.print();
      }
  });
};

export {
  printArea
}
