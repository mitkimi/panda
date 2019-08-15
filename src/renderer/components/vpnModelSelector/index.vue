<template>
  <div class="component">
    <div class="select-item" v-for="(item,index) in options" :key="index" @click="handleSelectItem(item)">
      <div class="item current" v-if="item.key === mode">
        <div class="icon"><Icon :type="item.icon" /></div>
        <div class="content">
          <div class="title">{{item.name}}</div>
          <div class="description">{{item.desc}}</div>
        </div>
      </div>
      <div class="item non-current" v-else>
        <div class="icon"><Icon :type="item.icon" /></div>
        <div class="content">
          <div class="title">{{item.name}}</div>
          <div class="description">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./vpnModelSelector.js"></script>
<style src="./vpnModelSelector.scss" lang="scss" scoped></style>
