<template>
  <div  >
    <div style="height:500px;width:100%">
      <vue-carousel :interval="3000" :images="images"></vue-carousel>
    </div>
    <home-section image="/static/index/entertainment.jpg" flip>
      <vue-headline level="2">新零售模式</vue-headline>
      <br />
      <vue-headline level="3">附近消费</vue-headline>
      <p>
        附近消费,及时接单
      </p>
      <br />
      <vue-headline level="3">资源广阔</vue-headline>
      <p>
        培训,琴行,社会零散资源一网打尽
      </p>
      <br />
      <vue-headline level="3">经济可行</vue-headline>
      <p>
        附近资源,在线，面聊任君选择
      </p>
    </home-section>

    <home-section image="/static/index/findplayer.jpg" alternative>
      <vue-headline level="2">安全保证</vue-headline>
      <br />
      <br />
      <vue-headline level="3">安全放心</vue-headline>
      <p>
        附近的安全的，可信赖的
      </p>
      <br />
      <vue-headline level="3">节约资源</vue-headline>
      <p>
        附近送单，绿色出行，减少送达时间
      </p>
      <br />
      <vue-headline level="3">构建信誉</vue-headline>
      <p>
        附近有声望，回头客不断
      </p>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import  VueCarousel from '@components/VueCarousel/VueCarousel.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
export default {
  data() : any {
      return {
          images: [{url:"http://www.puddor.com/back.png",alt:"2",copyright:"1"},
              {url:"http://www.puddor.com/back.png",alt:"2",copyright:"2"},
              {url:"http://www.puddor.com/back.png",alt:"2",copyright:"4"},
              {url:"http://www.puddor.com/back.png",alt:"2",copyright:"5"}]
      };
  },
  metaInfo: {
    title: '蒲灯儿--一键找乐手,一键组乐队,一键接商演,' + '一键找琴行,一键找服务,一键找资源,一键他乡宿' + '区块链商城,所见即所得',
    meta: [
      {
        name: 'description',
        content:
          '最便捷的音乐商演生态,带给你文艺生活,极致服务',
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
        content:
          '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      {
        name: 'og:description',
        content:
          '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      { name: 'og:image:url', content: 'http://www.puddor.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          '最便捷的音乐商演生态,带给你文艺生活,极致服务',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    VueCarousel
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
<style lang="scss" module>
.player-container {
  min-height: 100vh;
  height: 400vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;
}
</style>
