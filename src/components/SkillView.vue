<template>
<div class="content">
    <div class="danmu">
      <div class='world' v-for="(item,index) of danmu" :key="index">
        {{item}}
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "SkillView",
  data(){
    return{
      danmu:['css','javascript','html','vue']
    }
  }
}
</script>

<style scoped>
.content{
  padding:2% 3% 0 3%;
  margin-left: 30vw;
  background-color: #111111;
  width:calc(100 - 30vw);
  min-height: 100vh;
}
.danmu{
  width: 100%;
  background-color: #878787;
  position: relative;
}
.world{
  /*position: absolute;*/
  /*animation: rightToLeft 7s linear both;*/
  color: white;
  transform: translateX(-100%);
}
@keyframes rightToLeft {
  0% {
    transform: translate(100vw);
  }
  100% {
    transform: translate(-100%);
  }
}
</style>