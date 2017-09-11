<template>
    <div class="nav">
        <ul>
            <router-link to="/"><li class="navlist" style="color:#20A0FF;margin-left:0;">首页</li></router-link>
            <router-link to="/Introduce"><li class="navlist">阿米巴介绍</li></router-link>
            <router-link to="/Course"><li class="navlist">阿米巴课程</li></router-link>
            <router-link to="/Training"><li class="navlist">阿米巴内训</li></router-link>
            <router-link to="/Research"><li class="navlist">阿米巴研究</li></router-link>
            <router-link to="/About"><li class="navlist">关于我们</li></router-link>
        </ul>
    </div> 
</template>
<style>
.nav{
    width:100%;
    height: 60px;
    background: #475669;
}
.nav>ul{
    width:1000px;
    height: 60px;
    _background: red;
    margin:0 auto;
}
.navlist{
    width:130px;
    height: 55px;
    margin-left:44px;
    _background: #20A0FF;
    line-height: 60px;
    text-align: center;
    float: left;
    font-size: 16px;
    cursor: pointer;
    color: #bfcbd9;
    border-bottom: 5px solid #475669;
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
            $(this).css("border-color","#20A0FF").siblings().css("border-color","#475669")
        })
        navList.mouseout(function(){
            $(navList).css("border-color","#475669")
        })
        navList.click(function(){
            // console.log(111)
            navList.css("color","#bfcbd9");
            $(this).css("color","#20A0FF")
        })
    })
</script>
