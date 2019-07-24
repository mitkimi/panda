<template>
  <div class="page">
    <a-spin :tip="spinText" :spinning="isLoading">
      <div class="switch">
        <h4>VPN</h4>
        <a-switch v-model="vpnSwitch" @change="onChange"/>
      </div>
      <div class="speed" v-if="isShowSpeed">
        <a-icon type="upload" /> 上行：<span>25.30kb/s</span> &nbsp;&nbsp;&nbsp;&nbsp; <a-icon type="download" /> 下行：<span>23.03kb/s</span>
      </div>
      <div class="section">
        <div class="title">本地网络</div>
        <div class="content">IP: 10.1.5.121&nbsp;&nbsp;&nbsp;&nbsp;DNS: 10.1.5.1</div>
      </div>
      <div class="section">
        <div class="title">线 路</div>
        <div class="content">
          <a-select defaultValue="auto" style="width: 200px" @change="handleChange">
            <a-select-option value="auto">自动选择</a-select-option>
            <a-select-opt-group label="香港">
              <a-select-option value="hk1">HK-ALI1</a-select-option>
              <a-select-option value="hk2">HK-ALI1</a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="美国">
              <a-select-option value="us1">SF-BWG</a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="中国大陆">
              <a-select-option value="cn1">CN-ALI1</a-select-option>
              <a-select-option value="cn2">CN-ALI2</a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="内网">
              <a-select-option value="zgc1">中关村</a-select-option>
            </a-select-opt-group>
          </a-select>
        </div>
      </div>
      <div class="section mode">
        <div class="title">模 式</div>
        <vpn-model-selector :mode="currentMode" :options="modeOptions"></vpn-model-selector>
      </div>
    </a-spin>
  </div>
</template>

<script src="./vpn.js"></script>
<style src="./vpn.scss" lang="scss" scoped></style>
