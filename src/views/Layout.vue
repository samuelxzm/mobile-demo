<template>
  <div>
    <van-nav-bar
      :title="$store.getters.title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "layout",
  mounted(){
console.log(this)
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>