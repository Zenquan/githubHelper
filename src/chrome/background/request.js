import axios from "@/utils/axios";

// 根据自定义请求头判断是否需要重发
function isRequestSelf(headers) {
  return headers.some(header => header.name === "X-No-Rerequest");
}

// 使用后台请求
const installRequest = () => {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    async function(details) {
      if (!isRequestSelf(details.requestHeaders)) {
        const res = await axios.request({
          method: details.method,
          url: details.url,
          // 添加自定义请求头，区分页面和插件请求，防止循环请求
          headers: {
            "X-No-Rerequest": "true"
          }
        });
        console.log("res>>>", res);
        // 后续可以将响应实体转发出去，与其他模块进行通信
      }
    },
    { urls: ["https://www.baidu.com/*"] },
    ["blocking", "requestHeaders"]
  );
};

export default installRequest;
