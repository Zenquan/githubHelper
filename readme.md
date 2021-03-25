# githubHelper
> 这是一个辅助github，适用于Chromium内核浏览器的浏览器插件

## 特色
- git clone加速
- release、source、zip下载加速
- raw、blame下载加速

## 备注说明
克隆下来的目录的.git/config中的

```bash
[remote "origin"]
	url = https://github.com.cnpmjs.org/Zenquan/githubHelper.git
```
url为`https://github.com.cnpmjs.org`的服务链接，并不是`https://github.com`， 所以需要`git push`时，重新登录github账号，或者会push失败，所以解决方案是把以上`https://github.com.cnpmjs.org`改为`https://github.com`。

## 插件效果

### git clone、zip加速
<img src="https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/github-helper-git-clone.png" style="width: 400px;" alt="github-helper-git-clone"/><br><br><br>

### release、source、zip下载加速
<img src="https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/release.png" style="width: 400px;"/><br><br><br>

### raw、blame下载加速
<img src="https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/raw.png" style="width: 400px;"/><br><br><br>

### 支持github1s跳转
<img src="https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/github1s.png)" style="width: 400px;"/><br><br><br>

## 感谢

依赖项目
- [vue-chrome-extension](https://github.com/Jcanno/vue-chrome-extension)

参考项目
- [XIU2/UserScript](https://github.com/XIU2/UserScript)

加速资源由以下提供
- [https://gh.con.sh/](https://gh.con.sh/)
- [https://gh.api.99988866.xyz/](https://gh.api.99988866.xyz/)
- [fastgit](https://fastgit.org/)
- [https://gh.xiu2.xyz](https://gh.xiu2.xyz)
- [https://ghproxy.com](https://ghproxy.com)
- [https://pd.zwc365.com/seturl](https://pd.zwc365.com/seturl)
- [https://gitclone.com](https://gitclone.com)
- [https://github.com.cnpmjs.org](https://github.com.cnpmjs.org)
- [https://raw.sevencdn.com](https://raw.sevencdn.com)
- [https://cdn.jsdelivr.net](https://cdn.jsdelivr.net)

