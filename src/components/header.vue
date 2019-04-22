<template>
  <div>
      <nav>
          <ul>
              <li><router-link to="/addblog">Add Blog</router-link></li>
              <li><router-link to="/">All Blog</router-link></li>
              <li><router-link to="/registration">Register</router-link></li>
              <li><router-link to="/login">Log In</router-link></li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 30px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    text-align: center;
    font-size: 30px;
    background: rgb(3, 59, 110);
    padding: 14px 0;
    margin-bottom: 40px;
}
</style>
