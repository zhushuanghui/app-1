<!--
 * @Author: your name
 * @Date: 2020-04-10 11:22:32
 * @LastEditTime: 2020-04-12 14:45:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Messages.vue
 -->

<template>
  <div class="news">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <el-row class="tac" :gutter="20">
        
        <el-col class="article" :span="24">
          <div class="header flex spb">
            <div name="title">企业案例</div>
          </div>
          <article>
            <ul>
              <li v-for="item in 5" :key="item">
                <h4>  我司移动项目顺利通过验收</h4>
                <div class="record flex spb">
                  <span>2015年12月8日</span>
                  <span>在看</span>
                </div>
                <div>
                  <img :src="img" alt="">
                </div>
                <div class="desc">
                  2011年11月25日，我司互联网信息服务有限公司在与韶关移动分公司洽谈后，移动对我司在移动通信行业的应用产品表示强烈的合作意向，并成功成为移动的采购项目
                </div>
                <p class="read"><router-link :to="'/cases/detail/'+item">阅读全文</router-link></p>
              </li>
            </ul>
            <!-- <div class="pagination">
              <el-pagination
              background
              layout="prev, pager, next"
              :total="300">
              </el-pagination>
            </div> -->
          </article>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue';
import img from "../assets/images/1.jpg"
export default {
  name:'news',
  data(){
    return{
      img,
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
  .news{
    background: #fafafa;
    font-size: 14px;
  }
  .header{
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
  }
  .flex{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .spb{
    justify-content: space-between;
  }

  .content{
    width:90%;
    margin: 0 auto;
  }
  .article{
    flex: 1;
  }
  article{
    overflow: auto;
    li{
      background: #fff;
      padding: 10px 20px;
      margin-bottom:10px;
      box-shadow:0 0 12px 0 rgba(0, 0, 0, 0.1);
    }
    h4{
      font-size: 18px;
      color:#333;
      font-weight: 400;
    }
    img{
      width: 100%;
    }
    .record{
      color:#999;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .desc{
      color: #818181;
      height: 40px;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
    }
    .read{
      text-align: right;
    }
  }
  .pagination{
    text-align: center;
    margin-bottom: 40px;
  }
</style>
