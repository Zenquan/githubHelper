# quickgit

不知道从什么时候开始，git clone变得如此的慢，所以很多时候 git clone 都会出问题，最近看到有两个方案。

方案1：通过gitee或者coding想把要克隆的仓库从github中引入

- 优点：gitee或者coding国内的服务器，git clone非常快
- 缺点：这样多走一步，十分麻烦，不大推荐

方案2：则是git clone地址多加一点改变，譬如

https://github.com/Zenquan/babel-import-plugin.git -> https://github.com.cnpmjs.org/Zenquan/babel-import-plugin.git

- 优点：亲测！速度真的很快。
- 缺点：但是每次都要去这么拼凑一下十分麻烦，所以就写了这样一个简单的插件来解决这个需求

