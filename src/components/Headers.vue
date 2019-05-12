<template>
    <div class="bigbox">
    
    <div class='box' @click="switchTo('/login')" :class="{onactive:$route.path.includes('/login')}">登录</div>
    <div class='box' @click="switchTo('/reg')" :class="{onactive:$route.path.includes('/reg')}">注册</div>
    </div>
</template>
<script>

export default {
    name:'Headers',
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
            top 0
            display flex
            height 50px
            width 100px
            .box  
                 display flex
                 flex 1
                 flex-direction column
                 align-items center 
                 justify-content center
            .onactive
                 background green 


</style>


