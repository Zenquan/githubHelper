<template>
  <div class="popup">
    <!-- github匹配显示部分 gitHubHelper -->
    <div v-if="isGitHubHelper">
      <div class="item" @click="copyGitClone" v-show="isShowGitHubClone">复制快速git clone</div>
      <div class="item" @click="goGithub1s" v-show="isShowGitHubClone">go github1s</div>
    </div>
    <!-- 公共部分 点击生成二维码 -->
    <div class="item" @click="qrCode" v-show="isShowQrcode">
      <span>二维码</span>
      <span class="qrcode-option">{{isQrcodeShow ? '收起' : '展开' }}</span>
    </div>
    <div ref="qrcode" v-show="isQrcodeShow" class="qrcode"></div>
    <div class="item" @click="getQrCode" v-show="isShowQrcode">去生成二维码</div>
    <div class="item" @click="markdown" v-show="isShowMarkdown">Markdown工具</div>
    <div class="item" @click="diagrams" v-show="isShowDiagrams">diagrams工具</div>
    <div class="item">
      <span @click="github">github</span>
      <span @click="setting" class="setting-option">设置</span>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2';
import { Toast } from 'vant';
export default {
  data () {
    return {
      currentPageUrl: '',
      isShowQrcode: false,
      isShowMarkdown: false,
      isGenerQrcode: false,
      isQrcodeShow: false,
      isShowDiagrams: false
    }
  },
  props: {
  },
  methods: {
    setting() {
      chrome.tabs.create({ url: "/options/options.html" });
    },
    github () {
      chrome.tabs.create({ url: "https://github.com/Zenquan/browserHelper" });
    },
    qrCode () {
      !this.isGenerQrcode && new QRCode(this.$refs.qrcode, {
        width: 200,
        height: 200,
        text: this.currentPageUrl
      });

      this.isGenerQrcode = true
      this.isQrcodeShow = !this.isQrcodeShow
    },
    getQrCode () {
      chrome.tabs.create({ url: "/qrcode/qrcode.html" });
    },
    getGithubCnpmUrl (currentPageUrl) {
      const gitHubUrlArr = currentPageUrl.split('/'),
        urlArr = gitHubUrlArr.slice(0, 5);
      urlArr.splice(2, 1, 'github.com.cnpmjs.org')
      return urlArr.join('/');
    },
    copyGitClone () {
      const url = this.getGithubCnpmUrl(this.currentPageUrl),
        options = `git clone ${url}.git` 
      this.$copyText(options).then(function (e) {
          Toast('已复制')
        }, function (e) {
          Toast('无法复制')
        })
    }, 
    goGithub1s () {
      const url = this.currentPageUrl.replace(/github/, 'github1s')
      window.open(url)
    },
    markdown () {
      chrome.tabs.create({ url: "/markdown/index.html" });
    },
    diagrams () {
      chrome.tabs.create({ url: "/diagrams/index.html" });
    },
    init () {
      chrome.tabs.getSelected(null, (tab) => {
        console.log('>>>', tab.url);
        this.currentPageUrl = tab.url
      })

      chrome.storage.sync.get([
        'isShowQrcode',
        'isShowMarkdown',
        'isShowDiagrams'
      ], res => {
        console.log('res>>>', res);
        this.isShowQrcode = res.isShowQrcode;
        this.isShowMarkdown = res.isShowMarkdown;
        this.isShowDiagrams = res.isShowDiagrams;
      })
    }
  },
  computed: {
    isGitHubHelper () {
      console.log('>>>', this.currentPageUrl);
      return this.currentPageUrl.match(/github.com/)
    },
    isShowGitHubClone () {
      const gitHubUrlArr = this.currentPageUrl.split('/');
      return gitHubUrlArr.length >= 5;
    }
  },
  components: {
    Toast
  },
  created() {
  },
  mounted() {
    this.init();
  },
  destroyed() {
  }
};
</script>
<style lang="scss" scoped>
.popup {
  min-width: 220px;
  min-height: 25px;
  .item {
    padding: 3px 15px;
    cursor: pointer;
    color: #555;
    -webkit-transition: all .4s ease;
    text-align: justify;
    display: block;
    height: 20px;
    line-height: 20px;
    border-bottom: 1px dashed #e5e5e5;
    overflow: hidden;
    .setting-option, .qrcode-option {
      border: 1px dashed #ed3790;
      margin-left: 120px;
    }
  }
  .qrcode {
    margin: 10px;
  }
}
</style>