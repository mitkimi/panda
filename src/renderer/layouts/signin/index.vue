<template>
  <div class="page">
    <webview id="webview" ref="webview" :src="signIn.url" style="width: 100vw; height: 80vh;"></webview>
    <a-button @click="$router.push({path: '/'})">回去吧</a-button>
  </div>
</template>

<script src="./signin.js"></script>
<style src="./signin.scss" lang="scss" scoped></style>
