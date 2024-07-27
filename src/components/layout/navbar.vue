<template>
  <div class="navbar" style="background-color: black;">
    <div class="left-slide" >
      <a-space>
        <a-typography-title style="color: white;" :style="{ margin: 0, fontSize: '18px'}" :heading="5"> 
          天机监控系统 
        </a-typography-title>
      </a-space>
    </div>

    <ul class="right-slide">
      <li>
        <a-color-picker v-model="systemColor">
          <a-tag :color="systemColor">
            <template #icon>
              <icon-bg-colors style="color: #fff" />
            </template>
            {{ systemColor }}
          </a-tag>
        </a-color-picker>
      </li>

      <li>
        <a-tooltip content="github">
          <a-button shape="circle" type="outline" class="nav-btn">
           <span style="color: white; font-size: 8px;" >github</span>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="refresh">
          <a-button shape="circle" type="outline" class="nav-btn">
            <span style="color: white; font-size: 8px;" >refresh</span>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="search">
          <a-button shape="circle" type="outline" class="nav-btn">
            <span style="color: white; font-size: 8px;" >search</span>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="theme">
          <a-button shape="circle" type="outline" class="nav-btn">
            <span style="color: white; font-size: 8px;" >theme</span>

          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="language">
          <a-button shape="circle" type="outline" class="nav-btn" @click="setDropDownVisible">
            <span style="color: white; font-size: 8px;" >language</span>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-dropdown trigger="click">
          <a-button shape="circle" type="outline" class="nav-btn">
            <span style="color: white;">cxl</span>
          </a-button>
          <template #content>
            <a-doption>退出登录</a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ColorPicker } from '@arco-design/web-vue';
import { computed, ref, watchEffect } from 'vue'


const systemColor = ref('#165DFF')
watchEffect(() => {
  // setCssVar('--primary-6', systemColor.value, 20)
})

const triggerBtn = ref()
const setDropDownVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  triggerBtn.value.dispatchEvent(event)
}
</script>

<style lang="less">
.navbar {
  display: flex;
  height: 60px;
  background: var(--color-bg-3);
  border-bottom: 1px solid var(--color-border);
  justify-content: space-between;
  align-items: center;
}

.left-slide {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.right-slide {
  margin-right: 2vh;
  padding-right: 20px;
  display: flex;
  list-style: none;
  background-color: #c9cdd4;
  border-radius: 20vh;
  li {
    display: flex;
    align-items: center;
    padding: 0 10px;

    .nav-btn {
      background-color: #596464;
      border-color: rgb(var(--gray-2)) !important;
      color: rgb(var(--gray-8)) !important;
      font-size: 16px;
    }

    .trigger-btn {
      position: absolute;
      bottom: 14px;
      margin-left: 14px;
    }
  }
}
</style>
