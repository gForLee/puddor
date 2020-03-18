<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <small>&copy; Copyright {{ year }} 成都普登尔科技有限公司</small>
        </vue-grid-item>

        <vue-grid-item>
          <a href="tencent://message/?uin=676618567" target="_blank" rel="noopener" aria-label="qq profile">
            <VueIconQq />
          </a>
          <a href="18215683282" target="_blank" rel="noopener" aria-label="mobile profile">
            <VueIconWechat />
          </a>
          <a href="18215683282" target="_blank" rel="noopener" aria-label="mobile profile">
            <VueIconMobile />
          </a>
        </vue-grid-item>

        <vue-grid-item>
          <small>
            <a href="https://github.com/vuesion/vuesion/blob/master/LICENSE" target="_blank" rel="noopener">
              备案编号
            </a>
          </small>
          <small>
            <a
              href="https://map.baidu.com/poi/%E9%9F%A9%E5%9B%BD%E5%9F%8E/@11580652.143168112,3555810.128611555,14.55z?uid=d008b090339e2d27343a718b&info_merge=1&isBizPoi=false&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
              target="_blank"
              rel="noopener"
            >
              成都市大源西韩国城(四川大学旁)
            </a>
          </small>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../VueGrid/VueGrid.vue';
import VueGridItem from '../VueGridItem/VueGridItem.vue';
import VueGridRow from '../VueGridRow/VueGridRow.vue';
import VueIconGithubAlt from '../icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconTwitterSquare from '../icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueIconWechat from '../icons/VueIconWechat/VueIconWechat.vue';
import VueIconQq from '../icons/VueIconQq/VueIconQq.vue';
import VueIconMobile from '../icons/VueIconMobile/VueIconMobile.vue';


export default {
  name: 'VueFooter',
  components: {
    VueIconTwitterSquare,
    VueIconWechat,
    VueIconMobile,
    VueIconQq,
    VueIconGithubAlt,
    VueGrid,
    VueGridItem,
    VueGridRow,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueFooter {
  padding: $footer-padding;
  background: $footer-bg;
  color: $footer-color;
  text-align: center;

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    fill: $footer-link-color;
    margin: 0 $space-12;

    &:hover {
      fill: $footer-link-hover-color;
    }
  }

  small {
    display: inline-block;
    margin: $space-12 0;
  }

  a {
    color: $footer-link-color;
    font-weight: $footer-link-font-weight;

    &:hover {
      color: $footer-link-hover-color;
    }
  }
}
</style>
