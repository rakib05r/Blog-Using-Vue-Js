<template>
  <div id="blog-add">
      <i><marquee><h1>WELCOME!! TO BLOG SITE MADE BY USING VUEJS AND FIREBASE</h1></marquee></i>
      <i><h2>Write Your Blog Here</h2></i>
      <form>
          <i><h3><label for="">Blog Title:</label></h3></i>
          <input type="text" required value="" placeholder="Blog Title Here. . . . ." v-model="title" >
          <i><h3><label for="">Blog Content:</label></h3></i>
          <textarea name="" required id="" cols="40" rows="10" placeholder="Write Blog Content....." v-model="content"></textarea>
          <i><h3><label for="">Author:</label></h3></i>
          <input type="text" required value="" placeholder="Author Name Here. . . . ." v-model="author" >
          <button @click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submit">
            <h3 id='thank_you'>Thank You for adding your Blog</h3>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        title:"",
        content:"",
        author:"",
        submit:false
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://blogvue-58743.firebaseio.com/posts.json',{
              title:this.title,
              body:this.content,
              author:this.author
          }).then(function(data){
              this.submit=true
          });
      }
  } 
}
</script>

<style scoped>
#blog-add *{
    box-sizing: border-box;
}
#blog-add{
    margin: 20px auto;
    max-width: 500px;
}
#thank_you{
    text-align: center;
}
button{
    margin-top: 20px;
    margin-left: 220px;
    color: rgb(77, 40, 243);
    text-align: center;
}
label{
    text-align: center;
    color: rgb(252, 105, 105);
    display: block;
    margin: 20px 0 10px;
    font-family: Courier New;
}
input{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
h2{
    text-align: center;
    color: rgb(13, 11, 133);
}
h1{
    color: #000;
}
</style>
