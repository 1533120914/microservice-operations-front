<template>
  <div class="navbar">
    <div class="left-slide">
      <a-space>
 
        <a-typography-title :style="{ margin: 0, fontSize: '18px' }" :heading="5"> 天机监控系统 </a-typography-title>
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
            <template #icon>
              <icon-gitlab />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="refresh">
          <a-button shape="circle" type="outline" class="nav-btn">
            <template #icon>
              <icon-refresh />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="search">
          <a-button shape="circle" type="outline" class="nav-btn">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="theme">
          <a-button shape="circle" type="outline" class="nav-btn">
            <template #icon>
              <icon-sun-fill />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip content="language">
          <a-button shape="circle" type="outline" class="nav-btn" @click="setDropDownVisible">
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-dropdown trigger="click">
          <a-button shape="circle" type="outline" class="nav-btn">
            <template #icon>
              <a-avatar :size="32">
                <img alt="avatar" src="http://localhost:8000/image-server/IMG_3578.JPG" width="32px" height="32px"/>
              </a-avatar>
            </template>
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
  padding-right: 20px;
  display: flex;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;

    .nav-btn {
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
