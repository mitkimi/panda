<template>
  <div class="page">
    <webview id="webview" ref="webview" :src="signIn.url" style="width: 100vw; height: 100vh;"></webview>
  </div>
</template>

<script src="./signin.js"></script>
<style src="./signin.scss" lang="scss" scoped></style>
