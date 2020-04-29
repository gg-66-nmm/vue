<!--<template>
    <div>
         <h1>{{title}}</h1>
        <ul>
            <li v-for="(item,index) in datalist" :key="index">{{item}}</li>
        </ul>
        <h1>{{name}}</h1>
        <input type="button" @click="go" value="有点困了">
    </div>
</template>
<script>
export default {
    data(){
       return{
           title:"子组件标题",
           name:"儿子儿子，我是你爸爸"
       }
    },
    props:{
        title:'title',
        datalist:{
            type:Array,
            required:true,
        }
    },
    methods:{
        go(){
            this.$router.push("/page?info="+this.name);
        }
    }
}
</script>
<style>

</style>-->







