<!--
 * @Author: your name
 * @Date: 2020-04-10 15:31:45
 * @LastEditTime: 2020-04-11 23:18:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Culture.vue
 -->
<template>
  <div class="culture">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <div class="card ">
        <div class="header">
          咨询我们
        </div>
        <el-form id="form" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name" size="small" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formLabelAlign.tel" size="small" placeholder="请输入电话号码"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.email" size="small" placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item label="其他联系方式">
            <el-input v-model="formLabelAlign.other" size="small" placeholder="请输入其他联系方式"></el-input>
          </el-form-item>
          <el-form-item label="留言内容">
            <el-input  type="textarea" v-model="formLabelAlign.msg" size="small" placeholder="请输入留言内容" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" size="small">提交咨询信息</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name:'culture',
  data(){
    return{
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      labelPosition: 'left',
      formLabelAlign: {
        name: '111',
        tel: '222',
        email: '333',
        oteher:'',
        msg:''
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
    margin: 0 auto;
    padding: 20px;
  }
  .article{
    flex: 1;
  }
  .card{
    border:1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
  .header{
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    background: #ddd;
    border-bottom: 1px solid #ddd;
  }
  .el-form-item{
    padding: 10px;
    margin:0;
    border-bottom: 1px solid #ddd;
  }
</style>
