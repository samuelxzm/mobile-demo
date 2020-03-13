<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <van-notice-bar  :scrollable="true" text="通知内容sdfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" left-icon="volume-o" />
  </div>
</template>

<script>
import { NoticeBar } from 'vant';
export default {
  components:{
    VanNoticeBar:NoticeBar
  },
  name: 'Home',
}
</script>
