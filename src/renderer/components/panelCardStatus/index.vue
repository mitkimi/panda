<template>
  <div class="component">
    <div class="pad pending" v-if="data.status === 'pending'">
      <div class="icon"><Icon :type="data.icon" /></div>
      <div class="content">
        <div class="name">{{data.name}} <Spin size="small" style="float:right;" /></div>
        <div class="description">{{data.pending}}</div>
      </div>
    </div>
    <div class="pad success" v-if="data.status === 'success'">
      <div class="icon"><Icon :type="data.icon" /></div>
      <div class="content">
        <div class="name">{{data.name}}</div>
        <div class="description">{{data.success}}</div>
      </div>
    </div>
    <div class="pad fail" v-if="data.status === 'fail'">
      <div class="icon"><Icon :type="data.icon" /></div>
      <div class="content">
        <div class="name">{{data.name}}</div>
        <div class="description">{{data.fail}}</div>
      </div>
    </div>
  </div>
</template>

<script src="./panelCard.js"></script>
<style src="./panelCard.scss" lang="scss" scoped></style>
