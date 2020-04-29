<!--<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
    
    props:["title"]
}
</script>

<style>
    ul{
        list-style: none;
        display: flex;
    }
    ul li{
        width: 120px;
        height: 35px;
        line-height: 35px;
        text-align: center;
    }
</style>-->

<template>
 <div>
        <input type="button" value="飘了" @click="child">
        <h1>{{title}}</h1>
    </div>
  
</template>

<script>
export default {
  props: ['title'],
  data(){
        return{
            aa:123,
        }
    },
    methods:{
        child(){
            this.$emit("childClick",this.aa);
            console.log(12)
        }
    }
}

</script>

