<!--<template>
    <div>
       <child-component :title="title"></child-component>
    </div>
</template>

<script>
import ChildComponent from'./ChildComponent'
export default {
    data(){
        return {
            title:"子组件标题",
            bb:'123',
            aa:'',
            info:"我是你爸爸我真伟大，养你这么大",
            peoplelist:[
                {name:"刘三好",age:18,sex:"男"},
                {name:"王二小",age:16,sex:"男"},
                {name:"马冬梅",age:19,sex:"女"},
                {name:"王小二",age:32,sex:"男"},
            ]
        }
    },
    components:{
        ChildComponent
    },
    /* created(){
       console.log(this.bb=this.$route);
    }, */
    methods:{
        getdata(el){
            console.log(el)
            this.bb=el;
        }
    }
}
</script>

<style>

</style>-->
















<template>
<div>
    <!--子传父-->
    <top v-bind:title="title"></top>
    <!--父传子-->
    <top @childClick="go"></top>

</div>
</template>

<script>
import top from './Htop'
export default {
  components: { top},
  data() {
    return {
      title: '子组件标题'
    }
  },
  methods:{
      go(el){
          console.log(el)
      }
  }
}
</script>