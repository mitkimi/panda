<template>
  <div class="component">
    <div class="pad tool" v-if="type === 'tool'" @click="handleLink(data.url)">
      <div class="icon">
        <img :src="data.icon" />
      </div>
      <div class="content">
        <div class="name">{{data.name}}</div>
        <div class="description">{{data.desc}}</div>
      </div>
    </div>
    <div class="pad" v-else>
      <div class="icon">
        <img :src="data.icon" />
      </div>
      <div class="content">
        <div class="name">{{data.name}}</div>
        <div class="description">{{data.desc}}</div>
      </div>
      <div class="btn" @click="handleLink(data.url)">
        {{data.linkText}}
      </div>
    </div>
  </div>
</template>

<script src="./panelCard.js"></script>
<style src="./panelCard.scss" lang="scss" scoped></style>
