<template>
  <div class="page">
    <h4>设 置</h4>
    <div class="section user-info-box">
      <div class="user-info">
        <div class="name">{{name}}</div>
        <div class="email">{{email}}</div>
      </div>
      <div class="btn-box">
        <a-button type="danger" @click="handleExit">退出登录</a-button>
      </div>
    </div>
    <div class="modal-container animated fadeIn" id="exitModal" v-if="modelVisible">
      <a-card class="modal" title="提醒">
        <div class="content">您是否确定退出登录？</div>
        <div class="foot">
          <a-button @click="handleCancel">取消</a-button>
          &nbsp;
          <a-button type="primary" @click="handleConfirm">确定</a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script src="./setting.js"></script>
<style src="./setting.scss" lang="scss" scoped></style>
