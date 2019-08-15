<template>
  <div class="page">
    <h2>设 置</h2>
    <div class="section user-info-box">
      <div class="user-info">
        <div class="name">{{name}}</div>
        <div class="email">{{email}}</div>
      </div>
      <div class="btn-box">
        <Button type="error" ghost @click="handleExit">退出登录</Button>
      </div>
    </div>
  </div>
</template>

<script src="./setting.js"></script>
<style src="./setting.scss" lang="scss" scoped></style>
