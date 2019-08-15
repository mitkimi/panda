<template>
  <div class="page">
    <h2>工具箱</h2>
    <div class="section">实用工具汇聚于此</div>
    <div class="section">
      <div class="content">
        <panel-card class="item" v-for="(item,index) in tools" :key="index" :data="item" type="tool"></panel-card>
      </div>
    </div>
  </div>
</template>

<script src="./tool.js"></script>
<style src="./tool.scss" lang="scss" scoped></style>
