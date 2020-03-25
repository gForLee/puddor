<template>
    <div class="top-bar-nav-content">
        <div class="top-bar-nav-wraper">
            <div class="side-bar-wraper">
                <div class="side-bar">
                    <vue-sidebar style="background-color: white">
                        <vue-sidebar-group title="导航">
                            <vue-sidebar-group-item to="/">
                                一键找乐手
                            </vue-sidebar-group-item>
                        </vue-sidebar-group>

                    </vue-sidebar>
                </div>
                <div class="top-bar-nav-left">
                    <img class="nav-img-logo" src="logo.png" alt=""/>
                    <span class="nav-img-text">Puddor</span>
                </div>
            </div>
            <div class="top-bar-nav-right">
                <div>
                    <div>
                        <div class="top-nav-wraper">
                            <div class="top-nav-item">
                                <h5 style="baseline-shift: baseline">首页</h5>
                            </div>
                            <div class="top-nav-item">
                                <p style="vertical-align: bottom">社区</p>
                            </div>
                            <div class="top-nav-item">
                                <p style="vertical-align: bottom">娱乐购</p>
                            </div>
                            <div class="top-nav-item">
                                <h5 style="vertical-align: bottom">关于我们</h5>
                            </div>
                            <div class="top-nav-item">
                                <p>登录</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-bar-nav-wraper-moble">

        </div>
    </div>
</template>

<script lang="ts">
  import VueSidebar from '@components/VueSidebar/VueSidebar.vue';
  import VueSidebarGroup from '@components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
  import VueSidebarGroupItem from '@components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';

  export default {
    name: 'VueNavBar',
    components: {
      VueSidebarGroupItem,
      VueSidebarGroup,
      VueSidebar,
    },
  };
</script>

<style lang="scss" scoped>
    /*窗口 > 1400*/
    @media screen and (min-width: 1400px) {
        .top-bar-nav-content {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #0c1014;
            padding: 1.2em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 99;
        }
        .top-bar-nav-wraper {
            margin: 0 auto;
            min-width: 1400px;
            display: flex;
            justify-content: space-between;
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
            margin-left: 50px;
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
    }

    /*窗口 960 ~ 1400*/
    @media screen and (max-width: 1400px) {
        .top-bar-nav-content {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #0c1014;
            padding: 1.2em 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 99;
        }
        .top-bar-nav-wraper {
            width: 100%;
            display: flex;
            justify-content: space-between;
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
            margin-left: 50px;
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

    }

    /*窗口 768 ~ 960*/
    @media screen and (max-width: 960px) {
        .top-bar-nav-wraper {
            display: none;
        }
        .top-bar-nav-content {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #0c1014;
            padding: 1.2em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 99;
        }
        .top-bar-nav-wraper {
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        /deep/ ._2YA7icQELk7ZHr3bFAXn4y {
            background-color: white;
        }
        .side-bar {
            background-color: #0d9660;
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
            display: none;
        }
    }

    /*窗口 < 768px*/
    @media screen and (max-width: 768px) {
        .top-bar-nav-content {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #0c1014;
            padding: 1.2em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 99;
        }
        .top-bar-nav-wraper {
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        /deep/ ._2YA7icQELk7ZHr3bFAXn4y {
            background-color: white;
        }
        .side-bar {
            background-color: #0d9660;
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
            display: none;
        }

    }
</style>
