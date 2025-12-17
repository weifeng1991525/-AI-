import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// 导入页面组件
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import Bid from './views/Bid.vue'
import Data from './views/Data.vue'
import Tools from './views/Tools.vue'
import Team from './views/Team.vue'
import Literature from './views/Literature.vue'
import Impact from './views/Impact.vue'

// 创建路由实例
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页 - 医研智辅'
    }
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic,
    meta: {
      title: '智能选题 - 医研智辅'
    }
  },
  {
    path: '/bid',
    name: 'Bid',
    component: Bid,
    meta: {
      title: '标书生成 - 医研智辅'
    }
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
    meta: {
      title: '数据中心 - 医研智辅'
    }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: {
      title: '科研工具库 - 医研智辅'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      title: '团队协作 - 医研智辅'
    }
  },
  { path: '/literature', name: 'Literature', component: Literature, meta: { title: '文献管理 - 医研智辅' } },
  { path: '/impact', name: 'Impact', component: Impact, meta: { title: '成果转化与影响力中心 - 医研智辅' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由前置守卫，设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '医研智辅'
  next()
})

// 创建Pinia实例
const pinia = createPinia()

// 创建应用实例并挂载
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')