<template>
  <div>
    <vue-breadcrumb :items="[{ label: '论坛', href: '/forum/home/' }, { label: '商演', href: '/components' }, { label: 'title', href: '/components/breadcrumb' }]" />
    <home-section image="/static/index/entertainment.jpg" flip>
      <vue-headline level="2">一键接商演</vue-headline>
      <br />
      <vue-headline level="3">市民消费级</vue-headline>
      <p>
        婚庆,活动,展台,开业
      </p>
      <br />
      <vue-headline level="3">千万舞台任君选</vue-headline>
      <p>
        不同舞台铸就非凡人生传奇
      </p>
      <br />
      <vue-headline level="3">经济可行</vue-headline>
      <p>
        及时接单，早期规划，效果出奇
      </p>
    </home-section>

    <home-section image="/static/index/findplayer.jpg" alternative>
      <vue-headline level="2">一键找乐手</vue-headline>
      <br />
      <vue-headline level="3">学习支撑</vue-headline>
      <p>
        在线学习,线下切磋
      </p>
      <br />
      <vue-headline level="3">所见即所得</vue-headline>
      <p>
        视频简历，历史演出，优秀作品
      </p>
      <br />
      <vue-headline level="3">技艺切磋</vue-headline>
      <p>
        附近约会，附近畅聊
      </p>
    </home-section>

    <home-section image="/static/index/findplayer.jpg" flip>
      <vue-headline level="2">一键组乐队</vue-headline>
      <br />
      <vue-headline level="3">海量资源</vue-headline>
      <p>
        海量乐手,百家手艺
      </p>
      <br />
      <vue-headline level="3">在线组队</vue-headline>
      <p>
        在线识人
      </p>
      <br />
      <vue-headline level="3">线下排练</vue-headline>
      <p>
        线下资源，排练，设备一应俱全
      </p>
    </home-section>

      <home-section image="/static/index/findplayer.jpg" alternative>
      <vue-headline level="2">周边服务</vue-headline>
      <br />
      <vue-headline level="3">附近资源</vue-headline>
      <p>
        琴行 ,舞台建设，周边产品
      </p>
      <br />
      <vue-headline level="3">专业体系</vue-headline>
      <p>
        用专业知识解决个人瓶颈
      </p>
      <br />
      <vue-headline level="3">快捷服务</vue-headline>
      <p>
        附近资源能信任，快速反应
      </p>
    </home-section>

    <home-section image="/static/index/findplayer.jpg" flip>
      <vue-headline level="2">一键他乡宿</vue-headline>
      <br />
      <vue-headline level="3">他乡遇知己</vue-headline>
      <p>
        遥夜他乡宿，同君梁甫吟
      </p>
      <br />
      <vue-headline level="3">他乡家温暖</vue-headline>
      <p>
        视频简历，历史演出，优秀作品
      </p>
      <br />
      <vue-headline level="3">利用资源服务他人</vue-headline>
      <p>
        资源利用,知识切磋
      </p>
    </home-section>

    <home-section image="/static/index/findplayer.jpg" alternative>
      <vue-headline level="2">区块链商城</vue-headline>
      <br />
      <vue-headline level="3">分布式记账</vue-headline>
      <p>
        直链区块链
      </p>
      <br />
      <vue-headline level="3">永久债务</vue-headline>
      <p>
        一日记账，千年审计
      </p>
      <br />
      <vue-headline level="3">性能无瓶颈</vue-headline>
      <p>
        分布式系统，高可靠性
      </p>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
export default {
  data() {
    return {};
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
    VueBreadcrumb
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
@import '~@/app/shared/design-system';
.body_div {

}
</style>
