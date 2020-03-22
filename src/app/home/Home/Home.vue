<template>
  <div class="player-container">
    <!--首页-->
    <div class="inner-content" />
    <!--第二页-->
    <div class="inner-content-item2">
      <div class="content-left-img"></div>
      <div class="content-left-img2">
        <div class="content-left-img2-top">
          <div class="content-top-wraper">
            <span class="content-left-top-title">PERFORM</span>
            <span class="content-left-top-tips">一键接商演</span>
            <p class="content-left-top-textArea">
              商演介绍商演介绍商演介绍商演介绍商演介绍商演介绍商演 介绍商演介绍商演介绍商演介绍商演介绍商演介绍商演介绍
              商演介绍商演介绍商演介绍…
            </p>
          </div>
        </div>
        <div class="content-bottom-wraper">
          <div class="content-bottom-item">
            <span>市民消费级</span>
            <span>婚庆、活动、展台、开业</span>
          </div>
          <div class="content-bottom-item">
            <span>市民消费级</span>
            <span>婚庆、活动、展台、开业</span>
          </div>
          <div class="content-bottom-item">
            <span>市民消费级</span>
            <span>婚庆、活动、展台、开业</span>
          </div>
        </div>
      </div>
      <div class="content-paly-img"></div>
    </div>
    <!--第三页-->
    <div class="inner-content-item3">
      <div class="inner-content-item3-content">
        <span class="one-key-find">一键找乐手</span>
        <div class="one-key-find-bottom">
          <span class="one-key-find-bottom-item1">学习支撑</span>
          <span class="one-key-find-bottom-item2">在线学习、线下约</span>
        </div>
        <div class="one-key-find-bottom">
          <span class="one-key-find-bottom-item1">所见即所得</span>
          <span class="one-key-find-bottom-item2">视频简历、历史演出、优秀</span>
        </div>
        <div class="one-key-find-bottom">
          <span class="one-key-find-bottom-item1">技艺切磋</span>
          <span class="one-key-find-bottom-item2">附近约、附近畅聊</span>
        </div>
      </div>
    </div>
    <!--第四页-->
    <div class="inner-content-item4"></div>
    <!--第五页-->
    <div class="inner-content-item5"></div>
    <!--第六页-->
    <div class="inner-content-item6"></div>
    <!--第七页-->
    <div class="inner-content-item7"></div>
    <!--末页-->
    <div class="inner-content-item8"></div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  data() {
    return {};
  },
  metaInfo: {
    title:
      '蒲灯儿--一键找乐手,一键组乐队,一键接商演,' +
      '一键找琴行,一键找服务,一键找资源,一键他乡宿' +
      '区块链商城,所见即所得',
    meta: [
      {
        name: 'description',
        content: '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: '一键找乐手,一键组乐队,一键接商演,一键找琴行,一键找服务,一键找资源,区块链商城,所见即所得',
      },
      { name: 'og:url', content: 'http://www.puddor.com/' },
      { name: 'og:site_name', content: 'puddor' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      {
        name: 'og:description',
        content: '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      { name: 'og:image:url', content: 'http://www.puddor.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content: '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content: '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  methods: {
    onPlayerPlay(player) {},
    onPlayerPause(player) {},
    playerStateChanged(player) {},
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
<style lang="scss" scoped>
.player-container {
}

.inner-content {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 796px;
  background: url('../../../static/puddor/1.png') no-repeat center;
  background-size: contain;
}

.inner-content-item8 {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 408px;
  background: url('../../../static/puddor/8.png') no-repeat center;
  background-size: contain;
}

.inner-content-item7 {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 587px;
  background: url('../../../static/puddor/7.png') no-repeat center;
  background-size: contain;
}

.inner-content-item6 {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 805px;
  background: url('../../../static/puddor/6.png') no-repeat center;
  background-size: contain;
}

.inner-content-item5 {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 935px;
  background: url('../../../static/puddor/5.png') no-repeat center;
  background-size: contain;
}

.inner-content-item4 {
  margin: 0 auto;
  max-width: 1400px;
  min-height: 850px;
  background: linear-gradient(180deg, rgba(14, 5, 19, 1) 0%, rgba(0, 56, 144, 1) 100%);
}

.inner-content-item3-content {
  display: flex;
  flex-direction: column;
  margin-left: 155px;
  width: 526px;
  height: 530px;
  background: linear-gradient(180deg, rgba(45, 0, 184, 1) 0%, rgba(33, 3, 98, 1) 100%);
  box-shadow: -8px 9px 15px 4px rgba(0, 0, 0, 0.22);
  opacity: 0.75;
}

.inner-content-item3 {
  padding-top: 176px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;
  min-height: 850px;
  background: url('../../../static/puddor/3.png') no-repeat center;
  background-size: contain;
}

.inner-content-item2 {
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  height: 1112px;
  background: linear-gradient(180deg, rgba(50, 16, 27, 1) 0%, rgba(27, 5, 46, 1) 100%);
  padding-top: 130px;
}

.content-paly-img {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -232px;
  width: 255px;
  height: 255px;
  background: url('../../../static/puddor/Group11.png') no-repeat center;
  background-size: contain;
}

.content-left-img2 {
  width: 40%;
  height: 70%;
  background: rgba(87, 16, 54, 1);
  box-shadow: 24px 12px 30px 0px rgba(37, 13, 29, 1);
  margin-left: -60px;
  margin-top: 120px;
}

.content-left-img {
  width: 40%;
  height: 60%;
  background: url('../../../static/puddor/2.1.png') no-repeat center;
  margin-left: 153px;
}

.content-top-wraper {
  display: flex;
  flex-direction: column;
}

.content-left-img2-top {
  display: flex;
  flex-direction: column;
  padding: 61px 24px 41px 60px;
}

.content-left-top-title {
  height: 30px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  letter-spacing: 24px;
  margin-bottom: 12px;
}

.content-left-top-tips {
  font-size: 52px;
  height: 73px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 73px;
  margin-bottom: 35px;
}

.content-left-top-textArea {
  height: 86px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  margin-bottom: 41px;
}

.content-bottom-wraper {
  display: flex;
  flex-direction: column;
}

.content-bottom-item > span:nth-child(1) {
  height: 29px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  margin-bottom: 20px;
}

.content-bottom-item > span:nth-child(2) {
  height: 29px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
}

.content-bottom-item {
  display: flex;
  flex-direction: column;
  padding: 26px 0 22px 158px;
  background-color: #701646;
  margin-bottom: 20px;
}
.one-key-find {
  padding: 52px 61px 50px 0;
  text-align: right;
  font-size: 48px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 67px;
}
.one-key-find-bottom {
  display: flex;
  flex-direction: column;
  padding-left: 122px;
}
.one-key-find-bottom-item2 {
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  margin-bottom: 24px;
}
.one-key-find-bottom-item1 {
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  margin-bottom: 20px;
}
</style>
