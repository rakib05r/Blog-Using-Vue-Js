<template>
  <div>
    <all-header></all-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogAddPage from './components/BlogAddPage.vue'
import AllBlogs from './components/AllBlogs.vue'
import header from './components/header.vue'

export default {
  components: {
    'blog-add': BlogAddPage,
    'all-blogs': AllBlogs,
    'all-header': header
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
