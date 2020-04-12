<!--
 * @Author: your name
 * @Date: 2020-04-07 21:42:48
 * @LastEditTime: 2020-04-12 14:35:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/src/views/Home.vue
 -->

<template>
  <div  id="home" class="index">
      <header height="60px">
        <div class="logo">
          <img :src= "logo"  alt="">
        </div>
        <div class="right-top">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home" >网站首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/cases">案例</el-menu-item>
          <el-menu-item index="/Consultation">咨询</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
          </el-menu>
        </div>
      </header>
      <content>
        <router-view></router-view>
      </content>
      <!-- <footer class="footer">
        <ul>
          <li>地址: 合肥市黄山路西环中心广场</li>
          <li>电话: 13931140805 15075171310</li>
          <li>Email: 2212322343@qq.com 2050001400@qq.com</li>
        </ul>
      </footer> -->
  </div>
</template>

<script>
// // @ is an alias to /src
import logo from '@/assets/images/logo-app.png'

export default {
  name: 'Home',
  data () {
    return {
      logo,
      activeIndex: '/home'
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      this.activeIndex = this.$route.path;
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
    window.addEventListener('hashchange', () => {
      let currentPath = window.location.hash.slice(1)
        this.activeIndex = currentPath;
    }, false)
    this.activeIndex = this.$route.path;
  }
}

</script>
<style lang="less" scoped>
  #home{
    height: 100%;
    overflow: auto;
  }
  header{
    // height: 80px !important;
    width: 100%;
    margin:0 auto;
    padding: 0 10px;
    // padding-top:20px;
    // padding: 20px 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    .logo{
      width: 60px;
      // height: 40px;
      // height: 60px;
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
      }
    }
    .el-menu-item{
      padding: 0 10px;
    }
  }
  .el-menu.el-menu--horizontal{
    border-bottom:none
  }
  .el-menu--horizontal>.el-menu-item{
    height: 40px;
    line-height: 40px;
  }
  content{
    min-height: calc(100vh - 60px);
    margin:0;
    padding: 0;
  }
  .footer{
    padding: 10px;
    background: #161616;
    color: #CCC;
    font-size: 12px;
  }
</style>
