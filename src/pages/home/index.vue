<template>
    <div class="home">
    
    <van-row>
      <van-col class="qq" span="3">
        <a href="#" class="logo">LOGO</a>
      </van-col>
      <van-col span="17">
        <van-search 
          label="地址"
          shape="round"
          placeholder="请输入搜索关键词" 
          v-model="value" 
        />
      </van-col>
      <van-col class="qe" span="4">
        <van-icon class="qr" name="qr" size="40px" color="#399" />
      </van-col>
    </van-row>

    <van-swipe :height="150" :autoplay="3000" indicator-color="#000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-item-img" />
      </van-swipe-item>
    </van-swipe>

    <van-row class="home-product">
      <van-col  class="home-product-col1" span="6" v-for="v in 8" :key="v">
        <a href="#">
          <img src="http://img.aiimg.com/uploads/allimg/131214/1-131214225U2.jpg">
          <span>描述{{v}}</span>
        </a>
      </van-col>
    </van-row>

 <div id="qa">
   <ul>
     <li><a href=""><img src="/static/assets/img/4.jpg" alt=""></a></li>
     <li><a href=""><img src="/static/assets/img/4.jpg" alt=""></a></li>
     <li><a href=""><img src="/static/assets/img/4.jpg" alt=""></a></li>
   </ul>
 </div>

  </div>


</template>
<script>

export default {
 
  data(){
    return {
      value:'',
      images: [
        '/static/assets/img/1.jpeg',
        '/static/assets/img/2.jpg',
        '/static/assets/img/3.jpg',
      ]
    }
  }
}
  
    


</script>
<style scoped>
   .swipe-item-img{width: 100%;}
.home-product {
  background-color: white;
  margin-top:10px;
  padding: 0 10px;
}
.home-product-col1 {
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
  /* height: 70px; */
  text-align: center;
  /* background: red; */
}
.home-product-col1 img {
  width:70%;
}
.home-product-col1 span {
  display: block;
  color: #555;
  font-size: 12px;
  /* margin-bottom: 10px; */
}

.qq{margin-top:20px;}
.qe{margin-top:7px;}

#qa ul li{margin-top:30px;float:left;margin-left:20px;}
#qa ul li img{height:100px;width:100px;}
</style>


