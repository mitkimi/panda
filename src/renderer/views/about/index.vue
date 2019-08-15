<template>
  <div class="page">
    <h2>关 于</h2>
    <div class="section">
      <div class="title">Panda Tools</div>
      <div class="version" v-if="hasNewVersion === 'loading'">
        <div class="loading-container"><Spin /> </div>
        <div class="info-container">
          <div>正在检查新版本...</div>
          <div>当前版本: {{version}} {{name}}</div>
        </div>
      </div>
      <div class="new-version" v-if="hasNewVersion === 'true'">
        <Tooltip placement="right" content="发现新版本">
          <badge dot style="line-height: 30px">
            Panda {{newVersion.version}} {{newVersion.name}}
          </Badge>
        </Tooltip>
        <Button type="primary" @click="openWindow(newVersion.url)">下载更新</Button>
      </div>
      
      <div v-if="hasNewVersion === 'false'">
        <div>当前版本: {{version}}</div>
      </div>
    </div>
    <div class="section">
      <div class="title">开发者</div>
      <div class="content">加入开发计划请访问：<a @click="openWindow('http://panda.ipietech.com')">panda.ipietech.com</a></div>
    </div>
  </div>
</template>

<script src="./about.js"></script>
<style src="./about.scss" lang="scss" scoped></style>
