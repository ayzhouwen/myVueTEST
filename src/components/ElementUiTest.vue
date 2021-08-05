<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-form ref="form"  label-width="80px">
          <el-form-item label="计数状态">
            <el-input v-model="getStoreCount"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addStoreCount">增加计数状态</el-button>
            <el-button type="primary" @click="subStoreCount">减少计数状态</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
</div>
</template>


<script>

    export default {
        name: "ElementUiTest",
        data() {
            return {

            }
        },
        computed:{
            getStoreCount(){
                console.log('状态count值:',this.$store.state.count)
                return this.$store.state.count
            },

        },
        methods:{
            addStoreCount(){
              this.$store.commit('increment')
            },
            subStoreCount(){
                this.$store.commit('decrement')

            }
        }

    }
</script>


<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
