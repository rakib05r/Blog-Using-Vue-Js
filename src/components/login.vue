<template>
  <div id="register">
      <marquee><h1>WELCOME TO BLOG MADE BY USING VUEJS AND FIREBASE</h1></marquee>
      <h2>Log In</h2>
      <form>
          <h3><label for="">Email:</label></h3>
          <input type="email" value="" v-model="email" required>
          <h3><label for="">Password:</label></h3>
          <input type="text" value="" v-model="password" required>
          <button v-on:click.prevent="post">Login</button>
      </form>
      <div v-if="submit">
            <h3>Thank You for Login</h3>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        email:"",
        password:"",
        submit:false
    }
  },
  methods:{
      post:function(){
          this.$http.get('https://blogvue-58743.firebaseio.com/posts.json',{
              title:this.email,
              body:this.password
          }).then(function(data){
              this.submit=true
          });
      }
  }
}
</script>

<style scoped>
#register{
    max-width: 500px;
    margin: 0 auto;
}
h2{
    text-align: center;
    color: rgb(178, 113, 252);
}
button{
    margin-top: 20px;
    margin-left: 220px;
    color: rgb(77, 40, 243);
}
label{
    display: block;
    margin: 20px 0 10px;
    color: rgb(252, 105, 105);
}
input{
    display: block;
    width: 100%;
    padding: 10px;
}
</style>