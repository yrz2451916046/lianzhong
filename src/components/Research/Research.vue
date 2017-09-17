<template>
  <div class="research">
  <!-- <p>This is Research page!</p> -->
    <div class="research-safe">
      <ul class="news">
        <span style="width:100%;height:34px;background:#475669;font-size:18px;float:left;line-height:34px;">
          <i style="display:block;width:6px;height:34px;background:#20A0FF;float:left;"></i>
          <p style="margin-left:10px;color:#bfcbd9;float:left;">新闻资讯/News</p>
        </span>
        <a href="#" style="margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻1</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
        <a href="#" style="margin-left:50px;margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻2</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
        <a href="#" style="margin-left:50px;margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻3</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
        <a href="#" style="margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻4</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
        <a href="#" style="margin-left:50px;margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻5</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
        <a href="#" style="margin-left:50px;margin-top:30px;">
          <img src="../../assets/image/amibaclass.jpg" alt="" style="width:300px;height:200px;">
          <h2>我是新闻6</h2>
          <p>由以学术研究为主的社会团体组织(中国生产力学会)与中国阿米巴经营模式专业咨询机构(和英咨询)共同搭建的研究平台，属国内首创。权威研究中心的成立，既开拓了阿米巴经营模式科学研究及推广运用的新渠道，也标志着国内本土推广应用阿米巴经营模式进入到新阶段，意义重大，影响深远。</p>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.research{
  width: 100%;
  margin-bottom: 40px;
  margin-top:140px;
  height:930px;
  _background: rgb(230, 230, 230);
}
.research-safe{
  width: 1000px;
  margin: 0 auto;
  height: 800px;
  _background: #fff;
  margin-top: 40px;
  _box-shadow: 10px 10px 5px #888888;
}
.news>a{
  display:block;
  float: left;
  width:300px;
  height:400px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.news>a:hover{
  display:block;
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.news>a>h2{
  display:block;
  color: #333;
  font-size: 18px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  padding: 2px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-weight: 400;
  margin-top: 5px;
}
.news>a>p{
  display:block;
  color: #666;
  font-size: 14px;
  width: 280px;
  margin: 0 auto;
  height: 130px;
  line-height: 26px;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-indent:28px;
}
</style>
