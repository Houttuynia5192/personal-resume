<template>
  <div class="content">
    <div class="bullet-wrap">
      <div
          class="bullet-item"
          @mouseover="stopBullet(item)"
          v-for="item in showingBullets"
          :style="{
          transform: item.translate,
          animation: item.animate,
          color: 'white',
        }"
          @animationend="removeBullet(item)"
          :key="item.id"
          :data-line="item.line"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
//给弹幕一个ID
const getUUID = () => Math.random() + Math.random();
export default {
  name:'testView',
  data() {
    return {
      // 将要显示的弹幕队列
      waitBullets: [
        { id: getUUID(), name: "VUE", isWished: false, line: 0 },
        { id: getUUID(), name: "CSS", isWished: false, line: 0 },
        { id: getUUID(), name: "JavaScript", isWished: false, line: 0 },
        { id: getUUID(), name: "HTML", isWished: false, line: 0 },
        { id: getUUID(), name: "Python", isWished: false, line: 0 }
      ],
      showingBullets: [

        // {
        //   id: getUUID(),
        //   name: "CSS",
        //   isWished: false,
        //   line: 1,
        //   translate: "translate(40vw)",
        //   animate: "rightToleft 5s linear forwards"
        // },
        // {
        //   id: getUUID(),
        //   name: "VUE",
        //   isWished: false,
        //   line: 2,
        //   translate: "translate(50vw)",
        //   animate: "rightToleft 4s linear forwards"
        // },
        // {
        //   id: getUUID(),
        //   name: "JavaScript",
        //   isWished: false,
        //   line: 3,
        //   translate: "translate(20vw)",
        //   animate: "rightToleft 3s linear forwards"
        // },
        // {
        //   id: getUUID(),
        //   name: "javaScript",
        //   isWished: false,
        //   line: 4,
        //   translate: "translate(40vw)",
        //   animate: "rightToleft 5s linear forwards"
        // },
        // {
        //   id: getUUID(),
        //   name: "HTML",
        //   isWished: false,
        //   line: 5,
        //   translate: "translate(-20vw)",
        //   animate: "rightToleft 0.5s linear forwards"
        // },
        // {
        //   id: getUUID(),
        //   name: "HTML",
        //   isWished: false,
        //   line: 5,
        //   translate: "translate(60vw)",
        //   animate: "rightToleft 3s linear forwards"
        // }
      ],
      lines: 5,
      currentLine: 1,
      isInfinite: true
    };
  },
  mounted() {
    this.showNextBullet();
    const timer = setInterval(this.showNextBullet, 700);
    // 组件销毁前，清除定时器
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  methods: {
    showNextBullet() {
      if (!this.waitBullets.length) {
        return;
      }
      // 先确定弹道，跟上一个弹道错开即可
      this.currentLine = (this.currentLine % this.lines) + 2;
      // 从等待集合里取出第一个
      const currentBullet = this.waitBullets.shift();
      // 想要无限循环的话
      this.isInfinite &&
      this.waitBullets.push({
        id: getUUID(),
        name: currentBullet.name,
        isWished: false,
        line: 0
      });
      // 设置弹幕的弹道
      currentBullet.line = this.currentLine;
      // 弹幕放进显示集合里，弹幕开始滚动
      this.showingBullets.push(currentBullet);
    },
    removeBullet(bullet) {
      const index = this.showingBullets.findIndex(
          item => item.id === bullet.id
      );
      this.showingBullets.splice(index, 1);
    },
    stopBullet(item){
      const self = this;
      setTimeout(function () {
       self.removeBullet(item)
     },200)
    }
  },
};
</script>

<style scoped>
.content{
  margin-left: 30vw;
  background-color: #111111;
  overflow: hidden;
  min-height: 100vh;
  /*width: calc(100 - 30vw);*/
}
.bullet-wrap {
  height: 255px;
  /*margin-left: 30vw;*/
  background-color: #4e4e4e;
  position: relative;
}
.bullet-item {
  font-size: 25px;
  position: absolute;
  /*transform: translate(0%);*/
  animation: rightToleft 7s linear forwards;
}
.bullet-item[data-line="1"] {
  top: 5px;
  animation: rightToleft 2s linear forwards;
}
.bullet-item[data-line="2"] {
  top: 25px;animation: rightToleft 10s linear forwards;
}
.bullet-item[data-line="3"] {
  top: 100px;
}
.bullet-item[data-line="4"] {
  top: 185px;
  animation: rightToleft 4s linear forwards;
}
.bullet-item[data-line="5"] {
  top: 220px;
}
@keyframes rightToleft {
  0% {
    text-shadow: -5px 2px black;
    opacity: 1;
     /*transform: translate(-100%);*/
  }
  30%{
    text-shadow: -15px 2px black;
    opacity: 1;
  }
  100% {
    text-shadow: -50px 5px #4e4e4e;
    opacity: 0;
    transform: translate(100vw);
  }
}
@media (max-width: 575px) {
  .content{
    width: 100vw !important;
    margin-top: 300px;
    margin-left: 0;
  }
}
</style>
