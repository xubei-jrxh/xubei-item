import Detail from '@/pages/Detail'
// import Search from '@/pages/Search'
import Lease from '@/pages/Lease'
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login.vue'
import Reg from '@/pages/Reg.vue'
import Goods from '@/pages/Goods.vue'
import SourceShop from '@/pages/SourceShop.vue'
export default [
  {
    path: '/goods_details',
    component: Detail,
    name: 'detail',
  },
  {
    path: '/list',
    component: Lease,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/goods',
    component: Goods,
  },
  {
    path: '/login',
    component: Login,
  },
  // 注册
  {
    path: '/register',
    component: Reg,
  },
  //当前店铺
  {
    path: '/shop',
    component: SourceShop,
  },
]
