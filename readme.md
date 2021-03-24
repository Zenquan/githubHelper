# browserHelper

> 参考地址

https://github.com/docmirror/dev-sidecar
https://github.com/FastGitORG/document

## 背景
> 工作中需要使用一些辅助的工具，但是迫于以下原因，就决定自己使用vue写一个浏览器插件。
- 1、一个工具就装一个插件，最后装了n个；
- 2、有的工具用起来，不大符合自己的习惯、体验；
- 3、插件的扩展性不够好；

## 下载地址
[下载地址](https://github.com/Zenquan/browserHelper/releases)
## v1.0
### 公共部分
- [x] 生成和下载二维码
- [x] 独立二维码生成页面（对标草料二维码）
- [x] 选中文本右击进行百度（因为某些原因导致我们很难谷歌搜索东西，所以就是要百度或者必应）
- [x] Markdown工具 （Markdown编辑器，支持在线编写、预览、下载等，并支持HTML内容到Markdown格式的转换）
### github相关部分
#### git clone (github)
##### 背景

不知道从什么时候开始，git clone变得如此的慢，所以很多时候 git clone 都会出问题，最近看到有两个方案。

##### 方案1：通过gitee或者coding先把要克隆的仓库从github中引入

- 优点：gitee或者coding国内的服务器，git clone非常快
- 缺点：这样多走一步，十分麻烦，不大推荐

##### 方案2：则是git clone地址多加一点改变，譬如

https://github.com/Zenquan/quickgitclone.git -> https://github.com.cnpmjs.org/Zenquan/quickgitclone.git

- 优点：亲测！速度真的很快。
- 缺点：但是每次都要去这么拼凑一下十分麻烦，所以就写了这样一个简单的插件来解决这个需求
git clone https/github.com.cnpmjs.org.git
##### 需求
- [x] https://github.com/Zenquan/quickgitclone ->  https://github.com.cnpmjs.org/Zenquan/quickgitclone.git
- [x] https://github.com/Zenquan/quickgitclone/blob/master/content-script.js ->  https://github.com.cnpmjs.org/Zenquan/quickgitclone.git
- [x] https://github.com/Zenquan/quickgitclone/tree/master/img ->  https://github.com.cnpmjs.org/Zenquan/quickgitclone.git
- [x] 点击按钮复制快速克隆的操作
#### github1s
##### 需求
- [x] 增加github1s的点击跳转
#### 备注说明
克隆下来的目录的.git/config中的

```bash
[remote "origin"]
	url = https://github.com.cnpmjs.org/Zenquan/githubHelper.git
```
url为`https://github.com.cnpmjs.org`的服务链接，并不是`https://github.com`， 所以需要`git push`时，重新登录github账号，或者会push失败，所以解决方案是把以上`https://github.com.cnpmjs.org`改为`https://github.com`。
## v2.0
- [x] 历史生成二维码可用
- [ ] Markdown工具支持皮肤更换
- [x] 手机端markdown, 本地数据缓存
- [x] diagrams图片的管理

## v3.0
- [ ] 所有资讯链接榜整合（微博热榜、知乎热榜、技术公众号推送）
- [ ] 水印图片，可选择水印
- [ ] 跳转工作导航EasyLink
- [ ] 复制粘贴跨端同步工具

## v4.0
- [ ] 价格对比（淘宝，京东，当当，拼多多），cps跳转（eg.https://www.gwdang.com/）
