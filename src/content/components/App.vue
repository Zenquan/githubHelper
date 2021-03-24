<template>
  <div class="content"></div>
</template>

<script>
import $ from "jquery";
import { svg0, svg1, svg2 } from "./svg";
import { download_url, clone_url, raw_url } from "./config";

export default {
  name: "App",

  components: {},

  data() {
    return {
      download_url,
      clone_url,
      raw_url,
      svg: [svg0, svg1, svg2],
      backColor: "#ffffff",
      fontColor: "#888888",
      style: [
        "padding:0 6px;margin-right: -1px;border-radius: 2px;background-color: " +
          this.backColor +
          ";border-color: rgba(27, 31, 35, 0.1);font-size: 11px;color: " +
          this.fontColor +
          ";"
      ],
      gitHubUrlStr: "/https://github.com"
    };
  },

  methods: {
    // Git Clone
    addGitClone() {
      let that = this;
      let inputVal;
      const option = "git clone ";
      $("[role='tabpanel'] div.input-group")
        .first()
        .each(function() {
          inputVal = $(this)
            .find("input.input-sm")
            .val();
          $(this)
            .find("input.input-sm")
            .attr("value", `${option}${inputVal}`);

          let href_split = location.href.split("/"),
            url = [
              option +
                that.clone_url[0][0] +
                "/" +
                href_split[3] +
                "/" +
                href_split[4] +
                ".git",
              option +
                that.clone_url[1][0] +
                "/github.com/" +
                href_split[3] +
                "/" +
                href_split[4] +
                ".git",
              option +
                that.clone_url[2][0] +
                "/" +
                href_split[3] +
                "/" +
                href_split[4] +
                ".git"
            ],
            html = ``;
          for (let i = 0; i < url.length; i++) {
            html =
              html +
              `<div class="input-group" style="margin-top: 4px;" title="加速源：${that.clone_url[i][1]} （点击可直接复制）"><input value="${url[i]}" aria-label="${url[i]}" type="text" class="form-control input-monospace input-sm bg-gray-light" data-autoselect="" readonly=""><div class="input-group-button"><clipboard-copy value="${url[i]}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button">${that.svg[1]}</clipboard-copy></div></div>`;
          }
          $(this).after(html);
        });
      $("[role='tabpanel'] div.input-group-button")
        .first()
        .each(function() {
          $(this)
            .find(".btn-sm")
            .attr("value", `${option}${inputVal}`);
        });
    },
    // Release
    addRelease() {
      let that = this;
      $(".Box.Box--condensed").each(function() {
        $(this)
          .find(".d-flex.Box-body>a")
          .each(function() {
            let href = $(this).attr("href"),
              url = [],
              html = `<div style="display: flex;justify-content: flex-end;">`;
            that.download_url.map((download_url, index) => {
              if (index === 2) {
                url.push(`${download_url[0]}${href}`);
              } else {
                url.push(`${download_url[0]}${that.gitHubUrlStr}${href}`);
              }
            });
            for (let i = 0; i < url.length; i++) {
              html =
                html +
                `<a style="${that.style[0]}" class="btn" href="${url[i]}" rel="noreferrer noopener nofollow">${that.download_url[i][1]}</a>`;
            }
            html = html + `</div>`;
            $(this)
              .next()
              .after(html);
          });
        // 修改[文件大小]元素样式
        document
          .querySelectorAll("small.pl-2.color-text-secondary.flex-shrink-0")
          .forEach(
            el =>
              (el.style.cssText =
                "display: flex; justify-content: flex-end; flex-grow: 1; margin-right: 8px;")
          );

        // Source Code
        $(this)
          .find(".d-block.Box-body>a")
          .each(function() {
            let href = $(this).attr("href"),
              url = [],
              html = `<div style="display: flex;justify-content: flex-end;flex-grow: 1;">`;
            that.download_url.map((download_url, index) => {
              if (index === 2) {
                url.push(`${download_url[0]}${href}`);
              } else {
                url.push(`${download_url[0]}${that.gitHubUrlStr}${href}`);
              }
            });
            for (let i = 0; i < url.length; i++) {
              html =
                html +
                `<a style="${that.style[0]}" class="btn" href="${url[i]}" rel="noreferrer noopener nofollow">${that.download_url[i][1]}</a>`;
            }
            html = html + `</div>`;
            $(this).after(html);
          });
      });
      // 修改 Source code 样式，使其和加速按钮并列一排
      document
        .querySelectorAll("div.d-block.py-1.py-md-2.Box-body.px-2")
        .forEach(el => (el.className = "d-flex py-1 py-md-2 Box-body px-2"));
    },
    // Download ZIP
    addDownloadZIP() {
      let that = this;
      $(".dropdown-menu.dropdown-menu-sw.p-0 ul li:last-child").each(
        function() {
          let href = $(this)
              .children("a")
              .attr("href"),
            url = [
              that.download_url[0][0] + that.gitHubUrlStr + href,
              that.download_url[1][0] + that.gitHubUrlStr + href,
              that.download_url[2][0] + href,
              that.download_url[3][0] + that.gitHubUrlStr + href,
              that.download_url[4][0] + that.gitHubUrlStr + href,
              that.download_url[5][0] + that.gitHubUrlStr + href
            ],
            html = ``;
          for (let i = 0; i < url.length; i++) {
            html =
              html +
              `<li class="Box-row Box-row--hover-gray p-0"><a class="d-flex flex-items-center text-gray-dark text-bold no-underline p-3" rel="noreferrer noopener nofollow" href="${url[i]}">${that.svg[0]}Download ZIP ${that.download_url[i][1]}</a></li>`;
          }
          $(this).after(html);
        }
      );
    },
    // Raw
    addRawFile() {
      let that = this;
      $("#raw-url").each(function() {
        let href = location.href.replace("https://github.com", ""),
          href2 = href.replace("/blob/", "/"),
          url = [
            that.raw_url[1][0] + href2,
            that.raw_url[2][0] + "/gh" + href.replace("/blob/", "@"),
            that.raw_url[3][0] + href2,
            that.raw_url[4][0] + "/" + that.raw_url[0][0] + href2
          ],
          html = ``;
        for (let i = 0; i < url.length; i++) {
          html =
            html +
            `<a href="${url[i]}" title="${
              that.raw_url[i + 1][2]
            }" role="button" rel="noreferrer noopener nofollow" class="btn btn-sm BtnGroup-item">${
              that.raw_url[i + 1][1]
            }</a>`;
        }
        $(this).after(html);
      });
    },
    // Github1s
    addGithub1s() {
      const github1sUrl = location.href.replace(/github.com/, /github1s.com/);
      $(".file-navigation>a.btn.ml-2")
        .first()
        .each(function() {
          let html = `<a class='btn' href=${github1sUrl}>github1s</a>`;
          $(this).before(html);
        });
    },
    init() {
      if ($("html").attr("data-color-mode") == "dark") {
        // 黑暗模式判断
        if ($("html").attr("data-dark-theme") == "dark_dimmed") {
          this.backColor = "#272e37";
          this.fontColor = "#768390";
        } else {
          this.backColor = "#161a21";
          this.fontColor = "#b2b8bf";
        }
      }
    }
  },

  computed: {},

  async mounted() {
    this.init();
    this.$nextTick(() => {
      this.addGitClone();
      this.addRelease();
      this.addDownloadZIP();
      this.addRawFile();
      this.addGithub1s();
    });

    document.addEventListener("pjax:success", () => {
      //  pjax 事件发生后
      this.addGitClone();
      this.addRelease();
      this.addDownloadZIP();
      this.addRawFile();
      this.addGithub1s();
    });
  }
};
</script>

<style lang="scss" scoped>
.greet {
  position: absolute;
  top: 21.8vh;
  /* right: 0; */
  z-index: 999;
  .github-helper-btn {
    width: 32px;
    height: 120px;
  }
  .github-helper-txt {
    transform: rotate(-90deg) translateX(-90px);
  }
  .github-helper-content {
    width: 370px;
    height: 250px;
    background: #fff;
    border: 1px solid #ccc;
  }
}
</style>
