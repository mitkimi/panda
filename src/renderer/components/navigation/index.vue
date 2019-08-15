<template>
  <div class="component">
    <Menu active-name="current" @on-select="handleClick" style="width: 100%">
      <MenuItem name="welcome">
        <Icon type="md-arrow-round-forward" />
        欢 迎
      </MenuItem>
      <MenuItem name="vpn">
        <Icon type="md-link" />
        VPN
      </MenuItem>
      <MenuItem name="tools">
        <Icon type="md-bulb" />
        工具箱
      </MenuItem>
      <MenuItem name="apps">
        <Icon type="md-apps" />
        应用库
      </MenuItem>
      <MenuItem name="setting">
        <Icon type="md-cog" />
        设 置
      </MenuItem>
      <MenuItem name="about">
        <Icon type="md-flag" />
        关 于
      </MenuItem>
    </Menu>
  </div>
</template>

<script src="./navigation.js"></script>
<style src="./navigation.scss" lang="scss" scoped></style>
