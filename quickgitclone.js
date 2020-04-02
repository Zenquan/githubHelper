chrome.tabs.getSelected(null, function (tab) {
   const _$ = id => document.getElementById(id)
   const input = _$('input')
   const copyButton= _$('copyButton')  
   
   let arr = tab.url.split('/')
   const match = (regx) => {
      return tab.url.match(regx)
   }

   // 如果符合github仓库的特点才对url进行处理
   if(arr.length === 5 && match(/github.com/)
      || match(/\/tree\/master\//) 
      || match(/\/blob\/master\//)) {

      arr = arr.slice(0, 5)
      // https://github.com/Zenquan/quickgit.git -> https://github.com.cnpmjs.org/Zenquan/quickgit.git
      arr.splice(2, 1, 'github.com.cnpmjs.org')

      // 点击复制函数
      let copyFn =  () => {
         input.select(); // 选择对象
         document.execCommand("Copy"); // 执行浏览器复制命令
         alert("already copyed");
      }

      // 点击复制按钮监听事件
      copyButton.addEventListener('click',copyFn) 
   } else {
      arr = []
   }

   // 自动生成二维码
   var qrcode = new QRCode(_$("qrcode"), {
      width: 200,
      height: 200
    });

    function makeCode() {
   
      if (!input.value) {
        input.focus();
        return;
      }

      arr.length 
         ? qrcode.makeCode(input.value.slice(10))
         : qrcode.makeCode(input.value)
    }

    input.addEventListener("blur", function () {
      makeCode();
    })

    input.addEventListener("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });

    _$('generQcode').addEventListener('click', () => {
      _$('qrcode').style.display = 'block'
      makeCode();
    })

   input.value = arr.length
      ? `git clone ${arr.join('/')}.git`
      : tab.url
});





