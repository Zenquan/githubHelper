// 缓存页面上的ajax对象
let oldXHR = window.XMLHttpRequest;

// 过滤出目标url
function filterUrl(url) {
  return url.indexOf("github.com") !== -1;
}

// 生成新的ajax对象
function newXHR() {
  let realXHR = new oldXHR();

  // 监听ajxa onload事件
  realXHR.onload = function() {
    // 发送搜索列表页数据
    if (filterUrl(realXHR.responseURL)) {
      window.postMessage({ data: realXHR.responseText }, "*");
      console.log(`请求拦截到的文本:${realXHR.responseText}`);
    }
  };

  return realXHR;
}

// 替换ajax对象
window.XMLHttpRequest = newXHR;
