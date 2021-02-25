chrome.tabs.getSelected(null, function (tab) {
  const input = _$('input')
  const copyButton = _$('copyButton')

  let arr = tab.url.split('/')
  const match = (regx) => {
    return tab.url.match(regx)
  }

  /*
  * 
  * 如果符合github仓库的特点才对url进行处理
  */
  if (arr.length === 5 && match(/github.com/) ||
    match(/\/tree\/master\//) ||
    match(/\/blob\/master\//)) {

    arr = arr.slice(0, 5)
    // https://github.com/Zenquan/quickgit.git -> https://github.com.cnpmjs.org/Zenquan/quickgit.git
    arr.splice(2, 1, 'github.com.cnpmjs.org')
  } else {
    arr = [];
  }


  // 点击复制函数
  let copyFn = () => {
    input.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert("已复制");
  }
  // 点击复制按钮监听事件
  copyButton.addEventListener('click', copyFn)

  input.value = arr.length 
    ? `git clone ${arr.join('/')}.git` 
    : tab.url

  /*
  * 
  * 如二维码的生成和下载
  */
  const qrodeUtil = new QRCodeUtil()
  var qrcode = new QRCode(_$("qrcode"), {
    width: 200,
    height: 200
  });

  input.addEventListener("blur", function () {
    qrodeUtil.makeCode(qrcode, arr, input);
  })

  input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      qrodeUtil.makeCode(qrcode, arr, input);
    }
  });

  _$('generQcode').addEventListener('click', () => {
    _$('footer').style.display = 'block'
    qrodeUtil.makeCode(qrcode, arr, input);
  })

  // 去github1s
  _$('github1s').addEventListener('click', () => {
    const isSuitGithub1s = tab.url.match(/github.com/);
    if (isSuitGithub1s) {
      const url = tab.url.replace(/github/, 'github1s')
      window.location.href = url
      window.open(url)
    }
    alert('不适合使用github1s');
  })

  const child = idx => _$('qrcode').childNodes[idx]
  const canvas = child(0)
  const img = child(1)

  //先画二维码
  qrodeUtil.drawImg(canvas, img)
  //绑定下载事件
  _$('btn1').addEventListener('click', () => {
    let type = 'png';
    qrodeUtil.download(canvas, type);
  })

  _$('btn2').addEventListener('click', () => {
    let type = 'jpg';
    qrodeUtil.download(canvas, type);
  })
});
