
<template>
    <div class="box">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的商品</template>
          <el-menu-item index="2-1">商品1</el-menu-item>
          <el-menu-item index="2-2">商品2</el-menu-item>
          <el-menu-item index="2-3">商品3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>

      <div v-for="item in list">
        <router-link :to="`/detail?id=${item._id}`">
          <van-card
          num="2"
          tag="标签"
          :price="item.presentPrice"
          :desc="item.desc"  
          :title="item.desc"
          :thumb="'http://47.101.129.105/'+item.pic"
          :origin-price="item.originalPrice"
        >
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
        </router-link>
      </div>
    
    </div>
    
</template>
<script>

export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        list:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
      this.axios('api/list').then(res=>{
        this.list = res.data.data;
      })
    }
}
</script>
<style lang="stylus" scoped>
    
</style>
    

