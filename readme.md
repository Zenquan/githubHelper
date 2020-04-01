# quickgit

## 背景

不知道从什么时候开始，git clone变得如此的慢，所以很多时候 git clone 都会出问题，最近看到有两个方案。

方案1：通过gitee或者coding想把要克隆的仓库从github中引入

- 优点：gitee或者coding国内的服务器，git clone非常快
- 缺点：这样多走一步，十分麻烦，不大推荐

方案2：则是git clone地址多加一点改变，譬如

https://github.com/Zenquan/quickgit.git -> https://github.com.cnpmjs.org/Zenquan/quickgit.git

- 优点：亲测！速度真的很快。
- 缺点：但是每次都要去这么拼凑一下十分麻烦，所以就写了这样一个简单的插件来解决这个需求

- [x] https://github.com/Zenquan/quickgit/blob/master/content-script.js ->  https://github.com.cnpmjs.org/Zenquan/quickgit.git

- [x] https://github.com/Zenquan/quickgit/tree/master/img ->  https://github.com.cnpmjs.org/Zenquan/quickgit.git

- [ ] 点击按钮可以调起cmd等自动git clone到默认的目录下

## 使用

1.克隆到本地

```bash
git clone https://github.com.cnpmjs.org/Zenquan/quickgit.git
```

2. 在浏览器里中

![](https://user-gold-cdn.xitu.io/2020/4/2/171368926f5ec874?w=711&h=350&f=png&s=19088)
![](https://user-gold-cdn.xitu.io/2020/4/2/17136886106ef35d?w=1918&h=202&f=png&s=15283)

最后的效果

![](https://user-gold-cdn.xitu.io/2020/4/2/171368a4e1f11db3?w=1650&h=649&f=png&s=25844)
