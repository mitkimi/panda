<template>
  <div class="page">
    <div class="switch">
      <h2>VPN</h2>
      <i-switch v-model="vpnSwitch" @change="onChange"/>
    </div>
    <div class="speed" v-if="isShowSpeed">
      <a-icon type="upload" /> 上行：<span>25.30kb/s</span> &nbsp;&nbsp;&nbsp;&nbsp; <a-icon type="download" /> 下行：<span>23.03kb/s</span>
    </div>
    <div class="section">
      <div class="title">本地网络</div>
      <div class="content">IP: {{pageData.ip}}</div>
    </div>
    <div class="section">
      <div class="title">线 路</div>
      <div class="content">
        <div v-for="(item,index) in lane.all" :key="index">
          <div style="">{{item.groupName}}</div>
          <RadioGroup v-model="lane.choose" type="button">
            <Radio v-for="(host,hindex) in item.children" :key="hindex" :value="host.name" :label="host.name">
              <span>{{ host.name }}</span>
              <span class="speed" v-if="host.speed < 0" style="color: #F56C6C">( 超时 )</span>
              <span class="speed" v-if="host.speed >=0 && host.speed < 100" style="color: #67C23A">( {{host.speed}}ms )</span>
              <span class="speed" v-if="host.speed >= 100 && host.speed <= 230" style="color: #E6A23C">( {{host.speed}}ms )</span>
              <span class="speed" v-if="host.speed > 230" style="color: #F56C6C">( {{host.speed}}ms )</span>
            </Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
    <div class="section mode">
      <div class="title">模 式</div>
      <vpn-model-selector :mode="currentMode" :options="modeOptions" @selectMode="handleSelectMode"></vpn-model-selector>
    </div>
  </div>
</template>

<script src="./vpn.js"></script>
<style src="./vpn.scss" lang="scss" scoped></style>
