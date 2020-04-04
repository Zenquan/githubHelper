# quickgitclone

## 背景

不知道从什么时候开始，git clone变得如此的慢，所以很多时候 git clone 都会出问题，最近看到有两个方案。

方案1：通过gitee或者coding先把要克隆的仓库从github中引入

- 优点：gitee或者coding国内的服务器，git clone非常快
- 缺点：这样多走一步，十分麻烦，不大推荐

方案2：则是git clone地址多加一点改变，譬如

https://github.com/Zenquan/quickgitclone.git -> https://github.com.cnpmjs.org/Zenquan/quickgitclone.git

- 优点：亲测！速度真的很快。
- 缺点：但是每次都要去这么拼凑一下十分麻烦，所以就写了这样一个简单的插件来解决这个需求

## 补充需求

- [x] https://github.com/Zenquan/quickgitclone/blob/master/content-script.js ->  https://github.com.cnpmjs.org/Zenquan/quickgitclone.git

- [x] https://github.com/Zenquan/quickgitclone/tree/master/img ->  https://github.com.cnpmjs.org/Zenquan/quickgitclone.git

- [x] 点击按钮复制

- [x] 生成和下载二维码

- [ ] 输入`{"name": "zenquan", "age": 25, "sex": "female"}` 转换成 
```json
{
	name:  String,
	age:  Number,
	sex:  String,
}
```
后复制

## 使用说明

1.克隆到本地

```bash
git clone https://github.com.cnpmjs.org/Zenquan/quickgitclone.git
```

2. 在浏览器里中

![](https://user-gold-cdn.xitu.io/2020/4/2/171368926f5ec874?w=711&h=350&f=png&s=19088)
![](https://user-gold-cdn.xitu.io/2020/4/2/17136886106ef35d?w=1918&h=202&f=png&s=15283)
![](https://user-gold-cdn.xitu.io/2020/4/2/171368d61eb89488?w=946&h=400&f=png&s=18764)

最后的效果

![](https://user-gold-cdn.xitu.io/2020/4/2/1713937dc02ee9c0?w=805&h=406&f=png&s=9315)
