chrome.tabs.getSelected(null, function (tab) {
   const input = document.getElementById('input')
   let arr = tab.url.split('/')
   const match = (regx) => {
      return tab.url.match(regx)
   }

   if(arr.length === 5 && match(/github.com/)
      || match(/\/tree\/master\//) 
      || match(/\/blob\/master\//)) {
      arr = arr.slice(0, 4)
      arr.splice(2, 1, 'github.com.cnpmjs.org')
   } else {
      arr = []
   }

   input.value = arr.length
      ? `git clone ${arr.join('/')}.git`
      : 'this is not a git repo'
});
