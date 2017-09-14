<template>
  <div class="homepage">
    <div id="banner">
      <ul>
        <li class="picpage">
          <a href="">
            <img src="../../assets/image/01.png" alt="">
          </a>
        </li>
        <li class="picpage">
          <a href="">
            <img src="../../assets/image/02.png" alt="">
          </a>
        </li>
        <li class="picpage">
          <a href="">
            <img src="../../assets/image/01.png" alt="" style="margin-left:-250px;">
          </a>
        </li>
        <li class="picpage">
          <a href="">
            <img src="../../assets/image/02.png" alt="">
          </a>
        </li>
      </ul>
      <ul class="arrow">
        <li class="change"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div id="homeintroduce">
      <div class="homeintroduce-safe">
        <span style="display:block;float:left;width:1000px;height:350px;margin-top:50px;">
          <div class="homeintroduce-left">
            <p href="#" style="display:block;color:#fff;border-bottom: solid 1px #fff;padding-bottom:15px;margin-top:28px;margin-bottom:20px;font-size:30px;">阿米巴<br>内训案例</p>
            <a class="font-changecolor" href="#" style="color:#0994a1;margin-left:-6px;display:block;margin-bottom:10px;white-space:nowrap;font-size:14px;">【面授】阿米巴精英课程</a>
            <a class="font-changecolor" href="#" style="color:#0994a1;margin-left:-6px;display:block;margin-bottom:10px;white-space:nowrap;font-size:14px;">【面授】阿米巴精英课程</a>
          </div>
          <div class="homeintroduce-center">
            <div class="homeintroduce-top">
              <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                </p>
              </a>
            </div>
            <div class="homeintroduce-bott">
              <div class="homeintroduce-bottl">
                <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                  <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                  </p>
                </a>
              </div>
              <div class="homeintroduce-bottr">
                <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                  <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="homeintroduce-right">

          </div>
        </span>
      </div>
    </div>
    <div id="homeresearch">
      <div class="homeintroduce-safe">
        <span style="display:block;float:left;width:1000px;height:350px;margin-top:50px;">
          <div class="homeintroduce-left">
            <p style="display:block;color:#fff;border-bottom: solid 1px #fff;padding-bottom:15px;margin-top:28px;margin-bottom:20px;font-size:30px;">阿米巴<br>新闻资讯</p>
            <a class="font-changecolor" href="#" style="color:#0994a1;margin-left:-6px;display:block;margin-bottom:10px;white-space:nowrap;font-size:14px;">【面授】阿米巴精英课程</a>
            <a class="font-changecolor" href="#" style="color:#0994a1;margin-left:-6px;display:block;margin-bottom:10px;white-space:nowrap;font-size:14px;">【面授】阿米巴精英课程</a>
          </div>
          <div class="homeintroduce-center">
            <div class="homeintroduce-top">
              <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                </p>
              </a>
            </div>
            <div class="homeintroduce-bott">
              <div class="homeintroduce-bottl">
                <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                  <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                  </p>
                </a>
              </div>
              <div class="homeintroduce-bottr">
                <a href="#" style="display:block;width:100%;height:100%;overflow:hidden;">
                  <p class="positionflash" style="width:100%;height:100%;margin-top:125px;background:rgba(255,255,255,0.8);">

                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="homeintroduce-right">

          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<style>
.homepage{
  width: 100%;
  _height:1800px;
  _background: rgb(230, 230, 230);
}
#banner{
  width: 100%;
  height:450px;
  overflow: hidden;
}
#banner>ul{
  width: 100%;
  height: 450px;
  position: relative;
}
#banner .picpage{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
}
#banner>ul>li>a{
  display: block;
  width: 100%;
  height: 100%;
}
#banner .arrow{
  width: 140px;
  height: 30px;
  _background: red;
  position: absolute;
  top: 520px;
  left: 52%;
	margin-left: -100px;
}
#banner .arrow li{
	float: left;
	width: 10px;
  height: 10px;
  border-radius: 5px;
	background: #e8e8e8;
  margin:0 10px;
  cursor: pointer;
}
#banner .arrow .change{
  background: #45494d;
  opacity: 0.5;
}
#homeintroduce{
  width: 100%;
  height: 400px;
  float: left;
}
#homeresearch{
  width: 100%;
  height: 400px;
  float: left;
}
.homeintroduce-safe{
  width: 1000px;
  height: 400px;
  margin: 0 auto;
}
.homeintroduce-left{
  width: 220px;
  height: 350px;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  float: left;
  background: linear-gradient(to bottom right, #48D1CC , #00FFFF);
  background-size: cover;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.homeintroduce-left:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.homeintroduce-center{
  width: 450px;
  height: 350px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.homeintroduce-top{
  width: 100%;
  height: 165px;
  background: lightblue;
  float: left;
  position: relative;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.homeintroduce-top:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.homeintroduce-bott{
  width: 100%;
  height: 165px;
  margin-top: 20px;
  float: left;
}
.homeintroduce-bottl{
  width: 215px;
  height: 165px;
  float: left;
  background: lightblue;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.homeintroduce-bottl:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.homeintroduce-bottr{
  width: 215px;
  height: 165px;
  float: right;
  background: lightblue;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.homeintroduce-bottr:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.homeintroduce-right{
  width: 220px;
  height: 349px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  _border-top: 1px solid #ff6949;
  background: lightblue;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.homeintroduce-right:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
</style>

<script>
export default {
  
}
$(function(){
  var banner = $("#banner ul li")
  banner.eq(0).show().siblings().hide();
  var _index = -1;
  var autoPlay=function(){
    _index++;
    if(_index<4){
      banner.eq(_index).fadeIn(1000).siblings().fadeOut(1000);
      if(_index==3){_index=-1}
      setTimeout(function(){
        $('#banner .arrow li').eq(_index).addClass('change').siblings().removeClass('change');
      },300);		
    }	
  }
  var timer=setInterval(autoPlay,3000);
  $('#banner .arrow li').mouseenter(function(){
    _index=$(this).index();
    banner.eq(_index).fadeIn().siblings().fadeOut();
    $('#banner .arrow li').eq(_index).addClass('change').siblings('li').removeClass('change');
  })
  $("#banner").onmouseover=function(){
    clearInterval(timer);
  }
  $("#banner").onmouseout=function(){
    timer=setInterval(autoPlay,3000);
  }
  $(".font-changecolor").mouseover(function(){
    $(this).css("color","#666");
  })
  $(".font-changecolor").mouseout(function(){
    $(this).css("color","#0994a1");
  })
})
</script>
