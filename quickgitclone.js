chrome.tabs.getSelected(null, function (tab) {
   const input = document.getElementById('input')
   const copyButton= document.getElementById('copyButton')  
   
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
      copyButton.disabled = true
      copyButton.style.background = '#e6e1e1'
   }

   input.value = arr.length
      ? `git clone ${arr.join('/')}.git`
      : 'this is not a git repo'
});





