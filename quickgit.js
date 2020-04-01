chrome.tabs.getSelected(null, function (tab) {
   const input = document.getElementById('input')
   let arr = tab.url.split('/')
   let flag = arr.includes('github.com')
   arr.splice(2, 1, 'github.com.cnpmjs.org')
   input.value = arr.length === 5 && flag
      ? `git clone ${arr.join('/')}.git`
      : 'this is not a git repo'
});
