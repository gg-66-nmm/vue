<template>
    <div class="tablebob">
        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column label="头像"  width="180">
                <template slot-scope="scope">
                    <div>
                        <img :src="scope.row.avatarUrl" :alt="scope.row.realName" width="50" height="50">
                    </div>
                </template>            
            </el-table-column>
            <el-table-column prop="realName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="height" label="身高"></el-table-column>
            <el-table-column prop="weight" label="体重"></el-table-column>
            <el-table-column prop="city" label="所在城市"></el-table-column>
            <el-table-column prop="totalFanNum" label="粉丝数"></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination background layout="prev, pager, next" :total="totalNum" @current-change="handleCurrentChange"></el-pagination>
        </div>
    </div> 
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      getAll(){
            this.$axios.get("https://route.showapi.com/126-2",{
                params:{
                    showapi_appid:'203291',
                    showapi_sign:'9f16be32853943dfb9ceaf64e933b92c',
                    type:'日系',
                    page:this.currentPage,
                }
            }).then(res=>{
                //console.log(res);
                this.tableData=res.data.showapi_res_body.pagebean.contentlist;
                this.totalNum=res.data.showapi_res_body.pagebean.allPages;
                console.log(this.tableData)
            })
        },
        handleCurrentChange(val){
            this.currentPage=val;
            this.getAll();
        }
    },
    data(){
        return{
            tableData:[],
            currentPage:'1',
            totalNum:'',
        }
    },
    created(){
        this.getAll();
    },
  }
</script>
