<template>
  <div class="page">
    <h4>关 于</h4>
    <div class="section">
      <div class="title">Panda Tools</div>
      <div class="version" v-if="hasNewVersion === 'loading'">
        <div class="loading-container"><a-spin /> </div>
        <div class="info-container">
          <div>正在检查新版本...</div>
          <div>当前版本: {{version}}</div>
        </div>
      </div>
      <div class="new-version" v-if="hasNewVersion === 'true'">
        <a-tooltip placement="right">
          <template slot="title">
            <span>发现新版本</span>
          </template>
          <a-badge dot style="line-height: 30px">
            Panda {{newVersion.version}}
          </a-badge>
        </a-tooltip>
        <a-button type="primary">下载更新</a-button>
      </div>
      
      <div v-if="hasNewVersion === 'false'">
        <div>当前版本: {{version}}</div>
      </div>
    </div>
    <div class="section">
      <div class="title">开发者</div>
      <div class="content">后续版本开发及功能设计请联系 h@otian.me</div>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<style src="./about.scss" lang="scss" scoped></style>
