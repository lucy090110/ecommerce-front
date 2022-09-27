import Home from "@/src/components/app/home/container";
import Shop from "@/src/components/app/shop";
import Signup from "@/src/components/app/signup/container";
import Signin from "@/src/components/app/signin/container";
import Dashboard from "@/src/components/app/dashboard/container";
const routesConfig=[
   {
       path:"/app/home",
       component:Home,
       key:'home',
       title:'模拟商城',
       subTitle:'请尽情购物吧~'
   },
    {
        path:"/app/shop",
        component:Shop,
        key:'shop',
        title:'商品页',
        subTitle:'请挑选你喜欢的商品吧~'
    },
    {
        path:"/app/signin",
        component:Signin,
        key:'signin',
        title:'登录页',
        subTitle:'请赶快登录吧~'
    },
    {
        path:"/app/signup",
        component:Signup,
        key:'signup',
        title:'注册页',
        subTitle:'请赶快注册吧~'
    },
    {
        path:"/app/dashboard",
        component:Dashboard,
        key:'dashboard',
        title:'Dashboard',
        subTitle:''
    }
]
export default routesConfig