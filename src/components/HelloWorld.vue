<template>
  <div class="row">
    <div class="row" style="margin: 20px">
      <router-link to="/uiTest"><a>跳转到element UI测试</a></router-link>
    </div>
    <button @click="jumppage1">js路由跳转到element UI测试</button>
    <button @click="jumppage2">弹出新页面跳转到element UI测试</button>

    <div >
      父组件值:{{updateNum}}
    </div>
    <template v-if="1>2">
      <p>1>2</p>
    </template>
    <template v-else>
      <myC   :updateNum.sync="updateNum" :p_index="index"  :p_name="e.name" :p_age="e.order" v-for="(e,index) in list" v-if ="index<3"  :VB="e.order"  v-on:my-event="mycallBack" v-on:click.native="_click">
<!--        <p>父组件显示子组件传过来的数据:{{slotProps.data}}</p>-->
        <template slot="de fault" slot-scope="slotProps">
          {{ slotProps.data }}
        </template>
      </myC>
    </template>
    <div class="col-2">
      <button class="btn btn-secondary button" @click="sort">
        To original order
      </button>
    </div>

    <div class="col-6">
      <h3>Transition</h3>
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
          </li>
        </transition-group>
      </draggable>
    </div>

<!--    <rawDisplayer class="col-3" :value="list" title="List" />-->


<div>{{list}}</div>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  import myC from '@/components/myC'
  const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs"
  ];
  export default {
    name: "transition-example-2",
    display: "Transitions",
    order: 7,
    components: {
      myC,
      draggable
    },
    data() {
      return {
        list: message.map((name, index) => {
          return { name, order: index + 1 };
        }),
        drag: false,
        haha:"哈哈3",
        updateNum:12345
      };
    },
    methods: {
      sort() {
        this.list = this.list.sort((a, b) => a.order - b.order);
      },

      mycallBack:function (obj) {
          this.list[obj.index].name=obj.name;
          this.list[obj.index].order=obj.order;
          console.log('自定义事件回调完成:'+obj.name+","+obj.order);
      },
      _click:function () {
        //console.debug()
        console.log('父组件给子组件绑定的事件')
        //alert(456)
      },
      jumppage1(){
          this.$router.push('/uiTest')
      },
      jumppage2(){
          // this.$router.push('/uiTest')
          let routeData = this.$router.resolve({
              path: "/uiTest",
              query: {
                  name:'lei',
                  age: 18,
                  phoneNum:12345678901
              }
          });
          window.open(routeData.href, '_blank');
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    },
      mounted() {
        // this.$router.push('/uiTest')
      }
  };
</script>

<style>
  .button {
    margin-top: 35px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    width: 30%;
  }
  .list-group-item i {
    cursor: pointer;
  }
</style>
