<template>
  <div class="content">
    <div class="SchoolLogo">
      <div class="logo">
        <img src="../assets/logo1.png" alt="">
      </div>
      <div class="SchoolName">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>
    <div class="Graduation">
      <p>Graduation t

        ime：2023.6</p>
    </div>
    <div class="Major">
      <p>Major：Computer Science</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EducationView',
  }
</script>
<style scoped>
p{
  color: #5f5b5b;
}
.content{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30vw;
  background-color: #111111;
  width:calc(100 - 30vw);
}
.SchoolLogo{
  display: flex;
  margin-bottom: 20px;
}
.logo{
  width: 155px;
  height: 150px;
  margin-right: 20px;
}
.logo img{
  height: 100%;
  width: 100%;
}
.SchoolName{
  width: 595px;
  height: 140px;
}
/*.SchoolName img{*/
/*  width: 400px;*/
/*  height: 100px;*/
/*}*/
</style>
