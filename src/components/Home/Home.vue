<template>
  <div class="homepage">
    <div id="banner">
			<ul class="img">
				<li><img src="../../assets/image/1.jpg" alt="" style="width:1000px;height:450px;"></li>
        <li><img src="../../assets/image/2.jpg" alt="" style="width:1000px;height:450px;"></li>
        <li><img src="../../assets/image/3.jpg" alt="" style="width:1000px;height:450px;"></li>
        <li><img src="../../assets/image/4.jpg" alt="" style="width:1000px;height:450px;"></li>
        <li><img src="../../assets/image/5.jpg" alt="" style="width:1000px;height:450px;"></li>
			</ul>
			<ul class="arrow">
				<li class="change"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<ul class="direction">
				<li class="left"><img src="../../assets/image/normal_right.png"/></li>
				<li class="right"><img src="../../assets/image/normal_left.png"/></li>
			</ul>
		</div>
  </div>
</template>
<style>
.homepage{
  width: 100%;
  height:1000px;
  _background: rgb(230, 230, 230);
}
#banner{
	width: 1000px;
	height: 475px;
	margin: 0 auto;
	_margin-top: 80px;
	position: relative;
}
#banner .img{
	width: 1000px;
	height: 475px;
}
#banner .img a{
	display: block;
}
#banner .img li{
	position: absolute;
	left: 0;top: 0;
}
#banner .arrow{
	position: absolute;
	top: 430px;left: 53%;
	margin-left: -100px;
}
#banner .arrow li{
	float: left;
	width: 20px;
	height: 5px;
	background: #e8e8e8;
	margin-left: 10px;
}
#banner .arrow li:first-child{
	margin-left: 0;
}
#banner .arrow .change{
	background: #45494d;
}
#banner .direction{
	display: none;
}
#banner .direction li{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	z-index: 5;
	cursor: pointer;
	background: rgba(0,0,0,0.7);
}
#banner .direction li:first-child{
	/*background: url(../img/normal_right.png) no-repeat;*/
	top: 50%;left: 20px;
	margin-top: -25px;
}
#banner .direction li:last-child{
	/*background: url(../img/normal_left.png) no-repeat;*/
	top: 50%;right: 20px;
	margin-top: -25px;
}
#banner:hover .direction{
	display: block;
}
</style>

<script>
export default {
  
}
$(function(){
  var _index = 0;
  $('#banner .img li').eq(0).show().siblings().hide();
  var autoPlay=function(){
    _index++;
    if(_index<5){
      if(_index==4){_index=-1}
      $('#banner .img li').eq(_index).fadeIn(1000).siblings().fadeOut(1000);
      setTimeout(function(){
        $('#banner .arrow li').eq(_index).addClass('change').siblings().removeClass('change');
      },300);		
    }	
  }
  $('#banner .arrow li').mouseenter(function(){
    _index=$(this).index();
    $('#banner .img li').eq(_index).fadeIn().siblings().fadeOut();
    $('#banner .arrow li').eq(_index).addClass('change').siblings('li').removeClass('change');
  })
  var timer=setInterval(autoPlay,2000);
  $("#banner").onmouseover=function(){
    clearInterval(timer);
  }
  $("#banner").onmouseout=function(){
    timer=setInterval(autoPlay,2000);
  }
  $('.left').click(function(){	
    _index-=1;
    if(_index<0){
      _index=4;
    }
    $('#banner .img li').eq(_index).fadeIn().siblings().fadeOut();
    $('#banner .arrow li').eq(_index).addClass('change').siblings().removeClass('change');	
  })
  $('.right').click(function(){
    _index+=1;
    if(_index>4){
      _index=0;
    }
    $('#banner .img li').eq(_index).fadeIn().siblings().fadeOut();
    $('#banner .arrow li').eq(_index).addClass('change').siblings().removeClass('change');
  })
})
</script>
