<template>
  <div>
    <slot :data="msg"></slot>
    <P>自定义组件</P>
    <p>{{p_name}}</p>
    <p>{{p_age}}</p>
    <label>
      名称
      <input type="text" :id="'name'+p_index">
    </label>

    <label>
      年龄
      <input type="text" :id="'age'+p_index">
    </label>

   <label><button @click="myevent" :p_index=p_index>自定义事件</button></label>
  </div>


</template>

<script>
    export default {
        name: "myC",
        props:['p_name','p_age', 'p_index'],
        methods:{
          //自定义事件用来实现子组件向父组件通信,比如可以修改props的值,父组件定义时也可用简化版.sync="xxx"
          myevent:function () {
            this.$emit('my-event',{
              index:this.p_index,
              name:document.getElementById('name'+this.p_index).value,
              order:document.getElementById('age'+this.p_index).value*1
            })

            this.$emit('my-event',{
              index:this.p_index,
              name:document.getElementById('name'+this.p_index).value,
              order:document.getElementById('age'+this.p_index).value*1
            })

            //
            this.$emit('update:updateNum',Math.random())
          }
      },
      data() {
          return{
            msg:'子组件传给父组件的东东'
          }
      }


    }
</script>

<style scoped>

</style>
