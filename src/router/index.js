import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerTest from '@/components/routerTest'
import ElementUiTest from '@/components/ElementUiTest'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/routerTest',
      name:'routerTest',
      component:routerTest
    },
    {
      path:'/uiTest',
      name:'ElementUiTest',
      component:ElementUiTest
    }


  ]
})
