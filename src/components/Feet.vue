<template>
  <div class="feet">
    <div class="feet-safe">
      <ul>
        <li style="width:80px;">
          <p class="feet-title" style="width:80px;">首页</p>
        </li>
        <li>
          <p class="feet-title">阿米巴介绍</p>
          <a class="feet-content" style="margin-top:20px;">稻盛和夫</a>
          <a class="feet-content">阿米巴经营理念</a>
        </li>
        <li>
          <p class="feet-title">阿米巴课程</p>
          <a class="feet-content" style="margin-top:20px;">课程简介</a>
          <a class="feet-content">讲师介绍</a>
          <a class="feet-content">课程报名</a>
        </li>
        <li>
          <p class="feet-title">阿米巴内训</p>
          <a class="feet-content" style="margin-top:20px;">内训流程简介</a>
          <a class="feet-content">往期案例</a>
        </li>
        <li>
          <p class="feet-title">阿米巴研究</p>
          <a class="feet-content" style="margin-top:20px;">新闻咨询</a>
          <a class="feet-content">阿米巴研究文章</a>
        </li>
        <li style="border:0;">
          <p class="feet-title">关于我们</p>
          <a class="feet-content" style="margin-top:20px;">公司简介</a>
          <a class="feet-content">网站简介</a>
        </li>
      </ul>
      <p style="font-size:12px;color:#626262;text-align:center;">© 2017 UCAI Inc. All Rights Reserved 京ICP备13004859号</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.feet{
    width: 100%;
    height: 200px;
    background: rgb(255, 255, 255);
    float: left;
    margin-top:40px;
}
.feet-safe{
  width:1000px;
  height: 200px;
  margin: 0 auto;
}
.feet-safe>ul>li{
  width:140px;
  height: 140px;
  margin: 30px 18px;
  margin-bottom:0;
  float: left;
  _border-right: 1px dashed #bfcbd9;
}
.feet-content{
    display: block;
  width: 140px;
  float: left;
  cursor: pointer;
  color: #626262;
  font-size: 12px;
  line-height: 20px;
  margin: 5px 0;
}
.feet-title{
  width: 140px;
  _text-align: center;
  font-size: 16px!important;
  line-height: 20px;
  cursor: pointer;
  color: #424242;
  font-weight:400;
}
.feet-content:hover{
  color: #ff6949;
}
</style>
