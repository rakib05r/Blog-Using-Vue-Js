<template>
  <div id="all-blogs">
      <i><h1>Read Your Blog Here</h1></i>
      <div v-for="blog in blogs" :key="blog.id" class="one-blog">
          <h2>{{blog.title}}</h2>
          <h3>{{blog.author}}</h3>
          <article>{{blog.body}}</article>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        blogs:[]
    }
  },
  methods: {
  },
  created() {
      this.$http.get('https://blogvue-58743.firebaseio.com/posts.json').then(function(data){
          // this.blogs = data.body.slice(0,5);
          return data.json()
      }).then(function(data){
          var blogsArr=[];
          for(let key in data){
              data[key].id=key
              blogsArr.push(data[key]);
          }
          this.blogs=blogsArr;
      })
  }
}
</script>

<style scoped>
#all-blogs{
    max-width: 1100px;
    margin: 0 auto;
}
h1{
    text-align: center;
    color: rgb(79, 123, 245);
}
h2{
    text-align: center;
    color: rgb(245, 133, 133);
}
h3{
    text-align: center;
}
.one-blog{
    padding: 20;
    margin: 10px 0;
    box-sizing: border-box;
    background: #eee;
}
article{
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    color:#000;
}
</style>
