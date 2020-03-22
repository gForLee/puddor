<template>
  <div class="top-bar-nav-content">
    <div class="top-bar-nav-wraper">
      <div class="top-bar-nav-left">
        <img class="nav-img-logo" src="logo.png" alt="" />
        <span class="nav-img-text">Puddor</span>
      </div>
      <div class="top-bar-nav-right">
        <vue-grid>
          <vue-grid-row>
            <vue-grid-item class="top-nav-wraper">
              <large class="top-nav-item">
                <h5 style="baseline-shift: baseline">首页</h5>
              </large>
              <large class="top-nav-item">
                <p style="vertical-align: bottom">社区</p>
              </large>
              <large class="top-nav-item">
                <p style="vertical-align: bottom">娱乐购</p>
              </large>
              <large class="top-nav-item">
                <h5 style="vertical-align: bottom">关于我们</h5>
              </large>
              <large class="top-nav-item">
                <p>登录</p>
              </large>
            </vue-grid-item>
          </vue-grid-row>
        </vue-grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueNavBar',
};
</script>

<style lang="scss" scoped>
.top-bar-nav-content {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0c1014;
  padding: 1.2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999999;
}
.top-bar-nav-wraper {
  margin: 0 auto;
  min-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-img-logo {
  width: 22px;
  height: 31px;
}

.nav-img-text {
  margin-left: 9px;
  height: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
  font-size: 22px;
}
.top-bar-nav-left {
  display: flex;
  align-items: center;
}
.top-bar-nav-right {
  color: #0d9660;
}
.top-bar-nav-item {
  margin-right: 45px;
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  -webkit-font-smoothing: antialiased; /*chrome、safari*/
  -moz-osx-font-smoothing: grayscale; /*firefox*/
  > span :hover {
    cursor: pointer;
  }
}
.top-nav-wraper {
  display: flex;
  align-items: center;
}
.top-nav-item :hover {
  cursor: pointer;
}
.top-nav-item {
  line-height: 28px;
  height: 28px;
  margin-right: 50px;
  vertical-align: bottom;
  color: #ffffff;
}
</style>
