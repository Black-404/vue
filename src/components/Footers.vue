<template>
    <div class="bigbox">
        <div class='box' @click="switchTo('/home')" :class="{onactive:$route.path.includes('/home')}"><b>首页</b></div>
        <div class='box' @click="switchTo('/about')" :class="{onactive:$route.path==='/about'}"><b>关于</b></div>
        <div class='box' @click="switchTo('/detail')" :class="{onactive:$route.path==='/detail'}"><b>详情</b></div>
        <div class='box' @click="switchTo('/search')" :class="{onactive:$route.path==='/search'}"><b>我的</b></div>
    </div>
</template>
<script>
export default {
    name:'Footers',
    methods:{
        switchTo(path){
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .bigbox
        position fixed
        left 0
        bottom 0
        display flex
        height 50px
        width 100%
       .box
            display flex
            flex 1
            flex-direction column
            align-items  center 
            justify-content center
          
      .onactive
           background #07c160
           
</style>