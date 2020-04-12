<!--
 * @Author: your name
 * @Date: 2020-04-07 21:42:48
 * @LastEditTime: 2020-04-12 16:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/About.vue
 -->
<template>
  <div class="about">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <el-tabs tab-position="left" >
        <el-tab-pane label="公司简介" class="info">
          <p>
            潍坊京泰新型建材有限公司成立于2014年1月21日，位于潍坊市滨海经济技术开发区中韩产业园内，注册资金2600万元，是研发、生产、销售商品混凝土、高性能混凝土、特种混凝土、预拌砂浆、预应力混凝土管桩、混凝土外加剂、等建筑建材的专业企业。
          </p>
          <p>
            公司拥有雄厚的商品混凝土生产力量，现有国内最先进的中联重科环保型商品砼生产设备HZS180型生产线三条，年生产能力200余万方，生产流程采用计算机自动控制技术。公司拥有混凝土搅拌运输车30台，47米——52米混凝土输送泵车6台。同时公司拥有混凝土专项试验室，混凝土检测设备齐全，实行计算机网络化管理，对混凝土原材料、强度等级和性能进行精准检测，以确保产品质量。公司以规范的管理求生存，以良好的信誉求发展，以优质的服务求效益，以先进的理念求创新，以制度化、专业化、精细化为企业宗旨，以追求高起点、高标准、高品质为企业目标。潍坊京泰新型建材有限公司愿与业界朋友精诚合作，携手共创美好明天！
          </p>
        </el-tab-pane>
        <el-tab-pane label="企业文化">企业文化</el-tab-pane>
        <el-tab-pane label="组织架构">组织架构</el-tab-pane>
        <el-tab-pane label="公司福利">公司福利</el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
<script>
// import video2 from '@/assets/videos/2.mp4'
import about from '@/assets/images/about.jpg'
import contentslot from '@/components/Content.vue';

export default {
  name:'baout',
  data(){
    return{
      banner:about,
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    }
  },
  components:{
      contentslot
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
    // // width: 70%;
    // margin: 0 auto;
    // padding: 40px 0;
  }
  .el-tab-pane p{
    font-size: 14px;
    text-indent: 2em;
  }
  
  .header{
    border-bottom:1px solid #999;
  }

  .article{
    flex: 1;
  }

</style>