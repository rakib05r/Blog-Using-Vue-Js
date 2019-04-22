import AllBlogs from './components/AllBlogs.vue'
import BlogAddPage from './components/BlogAddPage.vue'
import register from './components/register.vue'
import login from './components/login.vue'
export default [
  { path: '/', component: AllBlogs},
  { path: '/addblog', component: BlogAddPage},
  { path: '/registration', component: register},
  { path: '/login', component: login}
]