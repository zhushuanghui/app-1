<!--
 * @Author: your name
 * @Date: 2020-04-10 11:22:32
 * @LastEditTime: 2020-04-12 14:42:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Messages.vue
 -->

<template>
  <div class="contact">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <ul class="adr-info">
        <li>地址: 合肥市黄山路西环中心广场</li>
        <li>电话: 13931140805 15075171310</li>
        <li>Email: 2212322343@qq.com 2050001400@qq.com</li>
      </ul>
      <div class="map" :style="map">
        
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name:'contact',
  data(){
    return{
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      map: {
        backgroundImage: "url(" + require("../assets/images/map-7.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content{
    padding: 10px;
    font-size: 14px;
  }
  .article{
    flex: 1;
  }
  .map{
    width: 100%;
    height: 300px;
  }
</style>
