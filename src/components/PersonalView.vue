<template>
   <div class="content">
      <div id="cover">
        <img alt="" src="../assets/img.png" >
      </div>
      <div class="career">
        <p>Front-End</p>
      </div>
      <div class="detail">
        <div class="introduce">
          <p style="font-style: italic;color:#bbb !important;line-height: 24px;">Hello, I am a python back-end developer based in Abuja Nigeria with professional experience building scalable enterprise applications. I enjoy building reusable products for fun and money. </p>
          <button type="button" class="btn btn-light mt-4 read-button" data-toggle="modal" data-target="#readMoreModal">Read More</button>
        </div>
        <div class="information">
          <p><span class="text-white">Birthday:</span> 1999.02.19</p>
          <p><span class="text-white">Address:</span> Guangdong province,China</p>
          <p><span class="text-white">Email:</span> <a href="mailto:nodywelete3@gmail.com" style="text-decoration: none; color: #bbb;">327849132@qq.com</a></p>
          <p><span class="text-white">Phone:</span> <a href="tel:18923945192" style="text-decoration: none; color: #bbb;">18923945192</a></p>
          <p><span class="text-white">Hire:</span> Available</p>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  name: "PersonalHome",
  components:{},
  methods:{
  }
}

</script>

<style  scoped >
.content{
  padding:2% 3% 0 3%;
  margin-left: 30vw;
  background-color: #111111;
  width:calc(100 - 30vw);
  min-height: 100vh;
}
#cover{
  width: 100%;
}
.career{
  width:150px;
  height: 100%;
  margin-top: 40px;
}
.career p{
  color: #bbbbbb;
  font-size: 30px;
}
#cover>img{
  height:550px;
  width: 100%;
}

.information p{
  color: #bbbbbb;
}
.introduce{
  width: 40%;
  padding: 20px;
  display: inline-block;
}
.information{
  padding: 20px;
  display: inline-block;
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

@media (max-width: 575px) {
  #cover>img{
    max-height: 350px !important;
  }
  .content{
    width: 100vw !important;
    margin-top: 300px;
    margin-left: 0;
  }
}
</style>