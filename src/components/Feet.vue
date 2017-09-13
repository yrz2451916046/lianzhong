<template>
  <div class="feet">
    <div class="feet-safe">
      <ul>
        <li style="width:80px;">
          <p class="feet-title" style="width:80px;">首页</p>
        </li>
        <li>
          <p class="feet-title">阿米巴介绍</p>
          <p class="feet-content" style="margin-top:20px;">稻盛和夫</p>
          <p class="feet-content">阿米巴经营理念</p>
        </li>
        <li>
          <p class="feet-title">阿米巴课程</p>
          <p class="feet-content" style="margin-top:20px;">课程简介</p>
          <p class="feet-content">讲师介绍</p>
          <p class="feet-content">课程报名</p>
        </li>
        <li>
          <p class="feet-title">阿米巴内训</p>
          <p class="feet-content" style="margin-top:20px;">内训流程简介</p>
          <p class="feet-content">往期案例</p>
        </li>
        <li>
          <p class="feet-title">阿米巴研究</p>
          <p class="feet-content" style="margin-top:20px;">新闻咨询</p>
          <p class="feet-content">阿米巴研究文章</p>
        </li>
        <li style="border:0;">
          <p class="feet-title">关于我们</p>
          <p class="feet-content" style="margin-top:20px;">公司简介</p>
          <p class="feet-content">网站简介</p>
        </li>
      </ul>
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
    background: #475669;
}
.feet-safe{
  width:1000px;
  height: 200px;
  margin: 0 auto;
}
.feet-safe>ul>li{
  width:140px;
  height: 140px;
  _margin:30px 12px;
  margin-top: 30px;
  margin-right:24px;
  float: left;
  border-right: 1px dashed #bfcbd9;
}
.feet-content{
  width: 140px;
  float: left;
  cursor: pointer;
  color: #bfcbd9;
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
  color: #bfcbd9;
  font-weight:400;
}
.feet-content:hover{
  color: #333;
}
</style>
