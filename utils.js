const _$ = id => document.getElementById(id)

class QRCodeUtil {
  // 自动生成二维码
  makeCode(qrcode, arr, input) {
    if (!input.value) {
      input.focus();
      return;
    }

    arr.length ?
      qrcode.makeCode(input.value.slice(10)) :
      qrcode.makeCode(input.value)
  }
  //绘制图片
  drawImg(canvas,img) {
    const ctx = canvas.getContext('2d');
    img.onload = () => {
      canvas.width = img.width, canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
    img.crossOrigin = "anonymous"; //关键
  }
  //图片下载操作,指定图片类型
  download(canvas, type) {
    //设置保存图片的类型
    let imgdata = canvas.toDataURL(type);
    //将mime-type改为image/octet-stream,强制让浏览器下载
    let fixtype = function (type) {
      type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
      let r = type.match(/png|jpeg|bmp|gif/)[0];
      return 'image/' + r;
    }
    imgdata = imgdata.replace(fixtype(type), 'image/octet-stream')
    //将图片保存到本地
    let saveFile = function (data, filename) {
      let link = document.createElement('a');
      link.href = data;
      link.download = filename;
      let event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    }
    let filename = new Date().toLocaleDateString() + '.' + type;
    saveFile(imgdata, filename);
  }
}