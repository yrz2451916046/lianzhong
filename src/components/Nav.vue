<template>
    <div class="nav">
        <ul>
            <a href="#">
                <img src="../assets/image/discover.png" alt="" style="display:block;width:60px;height:60px;float:left;margin-top:20px;">
            </a>
            <a href="#" style="font-size:28px;display:block;width:56px;height:60px;line-height:60px;margin-top:20px;float:left;color:#333;">
                联众
            </a>
            <li>
                <router-link to="/"><a class="navlist" style="color:#20A0FF;margin-left:0;">首页</a></router-link>
                <router-link to="/Introduce"><a class="navlist">阿米巴介绍</a></router-link>
                <router-link to="/Course"><a class="navlist">阿米巴课程</a></router-link>
                <router-link to="/Training"><a class="navlist">阿米巴内训</a></router-link>
                <router-link to="/Research"><a class="navlist">阿米巴研究</a></router-link>
                <router-link to="/About"><a class="navlist">关于我们</a></router-link>
            </li>
        </ul>
    </div> 
</template>
<style>
.nav{
    width:100%;
    height: 100px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
}
.nav>ul{
    width:1000px;
    height: 100px;
    _background: red;
    margin:0 auto;
}
.nav>ul>li{
    width: 710px;
    height: 100px;
    float: right;
}
.navlist{
    display: block;
    width:110px;
    height: 95px;
    margin-left:10px;
    _background: #20A0FF;
    line-height: 100px;
    text-align: center;
    float: left;
    font-size: 16px;
    cursor: pointer;
    color: rgb(135, 140, 145);
    border-bottom: 5px solid #fff;
}
.navlist:hover{
    color: #20A0FF;
} 
</style>
<script>
    export default {
    data() {
        return {
            activeIndex: '1'
        };
        },
        methods: {
        handleSelect(key, keyPath) {}
        }
    }
    $(function(){
        var navList = $(".navlist")
        navList.mouseover(function(){
            // console.log($(this).index())
            $(this).css("border-color","#20A0FF").siblings().css("border-color","#fff")
        })
        navList.mouseout(function(){
            $(navList).css("border-color","#fff")
        })
        navList.click(function(){
            // console.log(111)
            navList.css("color","rgb(135, 140, 145)");
            $(this).css("color","#20A0FF")
        })
    })
</script>
