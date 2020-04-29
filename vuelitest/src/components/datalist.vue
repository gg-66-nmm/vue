<template>  
    <div>
        我就纳了个闷了
       <ul>
           <li v-for="(item,index) in datalist" :key="index" @click="getlist(item.name)">{{item.name}}
           </li>
       </ul>
       <hr/>
       <div class="goods">
           <div class="goodslist" v-for="(item,index) in goodsList" :key="index">
               <img :src="item.pict_url" />
               <div class="item_name">{{item.title}}</div>
               <span class=item_price>￥{{item.zk_final_price}}</span>
               <span class="item_delprice">￥{{item.reserve_price}}</span>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:112,
            datalist:[],
            goodsList:[],
        }
    },
        mounted(){
            this.dataAll();
        },
        methods:{
            dataAll(){
                let self=this;
                self.$axios.get("api/w/website/findGoodsTypeList").then(function(res){
                    console.log(res.data);
                    self.datalist=res.data.data; 
                })
            },
            getlist(val){
                console.log(val);
                if(val!=''||val!=null||val!=undefined){
                    this.$axios.get("api/w/website/findGoodsList",{
                        params:{
                            platId: "d0a500ecf8ab41aa9ffe8e18ac6419e1",
                            info:val,
                            pageNo: 25,
                        }
                    }).then(res=>{
                        this.goodsList=res.data.data.tbk_dg_material_optional_response.result_list.map_data;
                        console.log(res.data.data.tbk_dg_material_optional_response.result_list.map_data)
                    })
                }
                
            }
        }
}
</script>


<style>
 ul,.goods {
     list-style: none;
     overflow: hidden;
     width: 1200px;
     margin: auto;
 }
 ul li{
     width: 60px;
     height: 35px;
     text-align: center;
     line-height: 35px;
     background-color: rgb(160, 76, 76);
     color:#000;
     border-radius: 5px;
     margin: 5px;
     float: left;
 }
 .goodslist{
     width: 150px;
     height: 230px;
     background-color: #f5f5f5;
     padding: 2px;
     float: left;
     margin: 10px 10px 0 0;
 }
 .goodslist:hover{
     box-shadow: 0 0 5px #ccc;
 }
 .goodslist img{
     width: 90%;

 }
 .item_name{
     font-size: 12px;
     width: 140px;
     text-overflow: ellipsis;
     overflow: hidden;
    white-space: nowrap;
 }
 .item_price{
     font-size: 16px;
     color: red;
     font-weight: 700;
 }
 .item_delprice{
     color: rgb(139, 136, 136);
     font-size: 12px;
     text-decoration-line: line-through;
 }
</style>