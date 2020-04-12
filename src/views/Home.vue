<template>
  <div class="home">
    <div class="my-swiper">
      <swiper ref="swiperTop" v-if="banners.length>1"  id="bigBanner" :options="swiperOptions">
        <swiper-slide  v-for="banner in bannerImgs" :key="banner">
          <!-- <video :src="banner" controls></video> -->
          <img  class="big-item" :src="banner" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="detail">
      <div class="top">
        <p class="title">服务范围简介</p>
        <p class="desc">为您量身定制的互联网服务,为您的企业插上互联网翅膀</p>
      </div>
      <ul class="serve-content">
        <li v-for="item in service" :key="item">
          <div class="img">

          </div>
          <p>一条龙服务</p>
        </li>
      </ul>
    </div>

    <div class="detail">
      <div class="top">
        <p class="title">行业资讯新闻</p>
        <p class="desc">聚焦最新的互联网行业动态</p>
      </div>
      <!-- <ul class="content news">
        <li v-for="item in news" :key="item">{{item}}</li>
      </ul> -->
      <ul class="serve-content news">
        <el-card :body-style="{ padding: '0px' }" v-for="item in news" :key="item" >
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div class="img-title">
            <span >好吃的汉堡</span>
            <!-- <div class="bottom clearfix">
              this is a test -->
              <!-- <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div> -->
          </div>
        </el-card>
      </ul>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// import { videoPlayer } from 'vue-video-player'
// import 'video.js/dist/video-js.css'
import img1 from '@/assets/images/banner-2.jpeg'
import img2 from '@/assets/images/banner-3.jpeg'
import video1 from '@/assets/videos/1.mp4'
import video2 from '@/assets/videos/2.mp4'
// import video3 from '@/assets/videos/3.mov'
// import video4 from '@/assets/videos/4.mov'

export default {
  name: 'home',
  data () {
    return {
      // banners: [video1, video2, video3, video4],
      banners: [video1, video2],
      bannerImgs: [img1, img2],
      service: [1, 2, 3, 4],
      news: [1, 2, 3],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true,
        autoplay: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less" scopeded>
  .home{
    width:100%;
  }
  .my-swiper{
    margin-bottom: 20px;
  }
  #bigBanner {
    height: 300px;
    .swiper-slide{
      height: 100%;
    }
    .big-item{
      width: 100%;
      height: 100%;
    }
    video{
      width: 100%;
      height: 100%;
    }
  }
  .detail{
    padding: 0 10px;
    .top{
      text-align: center;
      // padding-top: 20px;
      .title{
        font-size: 16px;
      }
      .desc{
        font-size: 12px;
      }
    }
    .serve-content{
      display: flex;
      justify-content: space-evenly;
      p{
        font-size: 14px;
      }
    }
    li{
      text-align: center;
      .img{
        width: 80px;
        height: 80px;
        background: #ccc;
        border-radius: 50%;
      }
    }
    .el-card{
      img:hover{
        opacity: 0.6;
        cursor: pointer;
      }
      .img-title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
</style>
