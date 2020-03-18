<template>
    <div class="top-bar-nav-content">
        <div class="top-bar-nav-left">
            <img class="nav-img-logo" src="logo.png" alt="">
            <span class="nav-img-text">Puddor</span>
        </div>
        <div class="top-bar-nav-right">
            <vue-grid>
                <vue-grid-row>
                    <vue-grid-item>
                        <large>首页</large>
                        <large>社区</large>
                        <large>娱乐购</large>
                        <large>关于我们 </large>
                        <large>登录</large>
                    </vue-grid-item>
                </vue-grid-row>
            </vue-grid>
            <!--<span class="top-bar-nav-item">首页 </span>-->
            <!--<span class="top-bar-nav-item">社区</span>-->
            <!--<span class="top-bar-nav-item">娱乐购</span>-->
            <!--<span class="top-bar-nav-item">关于我们</span>-->
            <!--<span class="top-bar-nav-item">登录</span>-->
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
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -700px;
        min-width: 1400px;
        background-color: transparent;
        padding: 58px 196px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-img-logo {
        width:22px;
        height:31px;
    }

    .nav-img-text {
        margin-left: 9px;
        height:14px;
        line-height: 14px;
        color:rgba(255,255,255,1);
        font-size:22px;
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
        height:28px;
        font-size:20px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:28px;
        font-family:PingFangSC-Regular,PingFang SC;
        >span :hover {
            cursor: pointer;
        }
    }
</style>
