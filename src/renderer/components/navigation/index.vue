<template>
  <div class="component">
    <a-menu
      @click="handleClick"
      style="width: 100%"
      :defaultSelectedKeys="current"
      :openKeys.sync="openKeys"
      mode="inline"
    >
      <a-menu-item key="welcome"><a-icon type="smile" /> 欢 迎</a-menu-item>
      <a-menu-item key="vpn"><a-icon type="wifi" /> VPN</a-menu-item>
      <a-menu-item key="tools"><a-icon type="tool" /> 工具箱</a-menu-item>
      <a-menu-item key="apps"><a-icon type="appstore" /> 应用库</a-menu-item>
      <a-menu-item key="setting"><a-icon type="setting" /> 设 置</a-menu-item>
      <a-menu-item key="about"><a-icon type="question" /> 关 于</a-menu-item>
    </a-menu>
  </div>
</template>

<script src="./navigation.js"></script>
<style src="./navigation.scss" lang="scss" scoped></style>
