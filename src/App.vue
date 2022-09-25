<template>
  <div id="app">
    <div class="navBox">
      <div class="list">
        <div class="name">
          <strong>Zhong</strong>
        </div>
        <nav>
          <router-link to="/">Personal</router-link>
          <router-link to="/skill">Expertise</router-link>
          <router-link to="/experience">Experience</router-link>
          <router-link to="/education">Education</router-link>
          <router-link to="/test">Test</router-link>
        </nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
.navBox{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  background-color: black;
  width:30vw;
  display: flex;
  flex-direction: column;
  /*height: 781px;*/
  align-items: center;
}

.list{
  height: 300px;
  width: 200px;
}
.name{
  width: 200px ;
  height: 100px;
  color: white;
  font-size:30px;
  letter-spacing:10px;
  font-weight: 500;
  text-transform: uppercase;
  /*margin-bottom: 40px;*/
}
nav {
  line-height: 40px;
  display: flex;
  flex-direction: column;
}

nav a {
  text-decoration: none !important;
  /*每个单词开头大写*/
  text-transform: capitalize;
  letter-spacing: 2px;
  /*color: #bbb !important;*/
  transition: letter-spacing .3s;
  /*font-weight: bold;*/
  color: white;
}
nav a:hover{
  letter-spacing: 4px;
  color: #fff !important;
}
nav a.router-link-exact-active {
  color: white;
}

@media (max-width: 575px) {
  #cover>img{
    max-height: 350px !important;
  }
  #app {
    display: flex;
    flex-direction: column;
  }
  .navBox{
    width: 100vw;
    height: 300px;
  }
}
</style>
