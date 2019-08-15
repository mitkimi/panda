<template>
  <div class="page">
    <h2>欢迎</h2>
    <div class="section avatar-section">
      <div class="avatar">
        <img :src="userInfo.avatar" />
      </div>
      <div class="info">
        <div class="name">{{userInfo.name || '名字'}}</div>
        <div class="email">{{userInfo.email || '未填写邮箱'}}</div>
      </div>
    </div>
    <div class="section">
      <div class="title">状态检查</div>
      <div class="content status-check">
        <panel-card-status class="item" v-for="(item,index) in statusCheck" :key="index" :data="item"></panel-card-status>
      </div>
    </div>
    <div class="section">
      <div class="title">最近使用</div>
      <div class="content recent-access">
        <div v-if="recentAccess.length <= 0">没有最近使用的工具哦</div>
        <panel-card-status class="item" v-for="(item,index) in recentAccess" :key="index" :data="item"></panel-card-status>
      </div>
    </div>
  </div>
</template>

<script src="./welcome.js"></script>
<style src="./welcome.scss" lang="scss" scoped></style>
