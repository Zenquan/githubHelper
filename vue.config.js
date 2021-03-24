const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipWebpackPlugin = require("zip-webpack-plugin");
const path = require("path");

// 只需要复制的文件
const copyFiles = [
  {
    from: path.resolve("src/chrome/manifest.json"),
    to: `${path.resolve("dist")}/manifest.json`
  },
  {
    from: path.resolve("src/assets"),
    to: path.resolve("dist/assets")
  },
  {
    from: path.resolve("src/chrome/inject.js"),
    to: path.resolve("dist")
  }
];

const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  })
];
// 生产环境打包dist为zip
if (process.argv.includes("--zip")) {
  plugins.push(
    new ZipWebpackPlugin({
      path: path.resolve("./"),
      filename: "dist.zip"
    })
  );
}

// 配置页面
const pages = {};
/**
 * popup 和 devtool 都需要html文件
 * 因此 chromeName 还可以添加devtool
 */
// const chromeName = ["popup"];

// chromeName.forEach(name => {
//   pages[name] = {
//     entry: `src/${name}/index.js`,
//     template: `src/${name}/index.html`,
//     filename: `${name}.html`
//   };
// });

module.exports = {
  pages,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  configureWebpack: {
    // 多入口打包
    entry: {
      content: "./src/content/index.js",
      background: "./src/chrome/background/index.js"
    },
    output: {
      filename: "js/[name].js"
    },
    plugins
  },
  css: {
    extract: {
      filename: "css/[name].css"
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("src"));
    // 处理字体文件名，去除hash值
    const fontsRule = config.module.rule("fonts");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    fontsRule.uses.clear();
    fontsRule
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use("url")
      .loader("url-loader")
      .options({
        limit: 1000,
        name: "fonts/[name].[ext]"
      });
  }
};
