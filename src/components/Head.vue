<template>
  <div class="head">
    <ul>
        <li class="logo">
            <img src="../assets/image/discover.png" alt="" style="display:block;width:60px;height:60px;float:left;margin-top:10px;">
            <a href="#" style="font-size:28px;dispaly:block;width:56px;height:28px;margin-top:20px;float:left;color:#475669;">
                联众
            </a>
        </li>
        <li class="hot-tel">
            <!-- <p style="color:#333;margin-top:20px;">咨询热线：</p> -->
            <img src="../assets/image/phone.png" alt="" style="width:30px;height:30px;float:left;">
            <p style="color:#475669;float:right;">400-093-7288</p>
        </li>
    </ul>
  </div>
</template>
<style>
.head{
    width:100%;
    height: 80px;
    _background: #475669;
}
.head>ul{
    width:1000px;
    height: 80px;
    margin:0 auto;
}
.head>ul>li{
    float: left;
}
.logo{
    width: 200px;
    height: 80px;
    _background:#d81b3b;
}
.hot-tel{
    width:185px;
    float: right!important;
    margin-top: 25px;
}
.hot-tel>p{
    font-size: 22px;
}
</style>

<script>
export default {
  
}
</script>
