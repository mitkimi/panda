<template>
  <div class="page">
    <h2>应用库</h2>
    <div class="section">
      <div class="title">办公软件</div>
      <div class="content">
        <panel-card class="item" v-for="(item,index) in office" :key="index" :data="item"></panel-card>
      </div>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
