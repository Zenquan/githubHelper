chrome.contextMenus.create({
  title: '使用百度搜索：%s', // %s表示选中的文字
  contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params)
  {
      // 注意不能使用location.href，因为location是属于background的window对象
      chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
  }
});

