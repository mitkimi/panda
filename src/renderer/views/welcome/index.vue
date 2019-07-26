<template>
  <div class="page">
    <h4>欢迎</h4>
    <div class="section">
      <div class="name">{{userInfo.name}}</div>
      <div class="email">shenxuling.95@jiyunhudong.com</div>
    </div>
    <div class="section">
      <div class="title">状态检查</div>
      <div class="content status-check">
        <panel-card-status v-for="item,index in statusCheck" :key="index" :data="item"></panel-card-status>
      </div>
    </div>
    <div class="section">
      <div class="title">最近使用</div>
      <div class="content recent-access">
        <div v-if="recentAccess.length <= 0">没有最近使用的工具哦</div>
        <panel-card-status v-for="item,index in fastAccess" :key="index" :data="item"></panel-card-status>
      </div>
    </div>
  </div>
</template>

<script src="./welcome.js"></script>
<style src="./welcome.scss" lang="scss" scoped></style>
