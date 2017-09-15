<template>
  <div class="introduce">
    <!-- <p>This is Introduce page!</p> -->
    <div class="introduce-safe">
      <ul>
        <li class="hofu" style="float:left;width:1000px;height:400px;background:#fff;margin-top:40px;">
          <div style="margin-top:30px;">
            <img src="../../assets/image/hofu.jpg" alt="" style="float:left;width:270px;height:340px;margin-left:20px;">
            <span style="float:left;width:650px;margin-left:30px;margin-right:30px;font-size:16px;color:#666;line-height:24px;">
              <h1 style="height:80px;line-height:80px;text-align:center;color:#333;font-size:34px;font-weight:400;">稻盛和夫
                <span style="font-size:20px;">（世界著名实业家、哲学家）</span>
              </h1>
              <p style="text-indent:32px;text-align:justify;">稻盛和夫，1932年出生于日本鹿儿岛，鹿儿岛大学工学部毕业。27岁创办京都陶瓷株式会社（现名京瓷Kyocera），52岁创办第二电信（原名DDI，现名KDDI，目前在日本为仅次于NTT的第二大通讯公司），这两家公司又都在他的有生之年进入世界500强，两大事业皆以惊人的力道成长。 稻盛和夫的释义是涵盖了生活态度、哲学、思想、伦理观等因素人格。痛惜战后的日本以选择聪明才辩型的人做领导为潮流，忽略了道德规范和伦理标准，导致政界、商界丑闻频发。他建议领导者的选拔标准是德要高于才，也就是居人上者，人格第一，勇气第二，能力第三。他指出热爱是点燃工作激情的火把。无论什么工作，只要全力以赴去做就能产生很大的成就感和自信心，而且会产生向下一个目标挑战的积极性。成功的人往往都是那些沉醉于所做事的人。</p>
            </span>
          </div>
        </li>
        <li class="management" style="float:left;width:1000px;height:400px;background:#fff;margin:40px 0;">
          <div style="margin-top:30px;">
            <img src="" alt=""style="float:right;width:270px;height:340px;background:red;margin-right:20px;">
            <span style="float:left;width:650px;margin-left:30px;margin-right:30px;font-size:16px;color:#666;line-height:24px;">
              <h1 style="height:80px;line-height:80px;text-align:center;color:#333;font-size:34px;font-weight:400;">
                阿米巴经营理念
              </h1>
              <p style="text-indent:32px;text-align:justify;">日本的稻盛和夫先生之前和你一样也有这样的烦恼，但是稻老现在是两家世界五百强的创始人，被称为商界的经营之圣。这其中的缘由便是他创立了独有的“阿米巴经营手法”。  稻盛和夫早年创业时遭遇的困境，当时在日本京瓷公司，稻盛和夫事必躬亲，既负责研发生产，又负责产品营销。但当公司发展到100人以上时，稻盛和夫已经苦不堪言，他非常渴望有更多的管理者可以分担各重要部门责任。于是，在京瓷公司成立5年之后，为了保持公司的发展活力，稻盛和夫创立了阿米巴经营模式。他把公司细分成许多个“阿米巴”，各个阿米巴组织独立核算，独立经营，并从公司内部选拔阿米巴“巴长”，并给予授权，委以经营重任，从而培育出许多具有经营者意识的领导人，目的就是让人人都成经营者。</p>
            </span>
          </div>
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
.introduce{
  width: 100%;
  height:930px;
  _background: rgb(230, 230, 230);
  margin-top:100px;
}
.introduce-safe{
  width: 1000px;
  margin: 0 auto;
  height: 800px;
  _background: rgb(230, 230, 230);
}
.hofu{
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.management{
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
.hofu:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
.management:hover{
  box-shadow: 0 3px 15px rgba(0,0,0,0.5);
  transition: box-shadow 0.5s;
}
</style>
