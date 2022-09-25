<template>
  <div class="container">

  <div class="navBox">
    <div class="list">
      <div class="name">
        <strong>Zhong</strong>
      </div>
      <nav>
        <router-link to="/home">Personal</router-link>
        <router-link to="/education">Education</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/test">a</router-link>
      </nav>
    </div>
  </div>
    <div class="content">
      <component  :is='currentView'></component>
    </div>
<!--    <personal-view></personal-view>-->
  </div>
</template>

<script>
import personal from "../../../demo/src/views/PersonalView";
import education from "@/components/EducationView";
import experience from "@/components/ExperienceView";

export default {
  name: "ListView",
  components:{personal,experience,education},
  data(){
    return {
      currentView:'personal'
    }
  }
}
</script>

<style scoped>
.container{
  /*display: flex;*/

}
.content{
  margin-left: 22vw;
  background-color: #111111;
  /*position: absolute;*/
  /*right: 0;*/
}
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

nav {
  line-height: 40px;
  display: flex;
  flex-direction: column;
}

nav a {
  text-decoration: none !important;
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
    width: 100% !important;
    height: 200px !important;
  }
  .content{
    width: 100% !important;
  }
}
</style>