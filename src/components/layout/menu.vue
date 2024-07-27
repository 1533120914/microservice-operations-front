<template>
  <div class="p-[20px] menu-demo" >
    <a-menu mode="pop" showCollapseButton>
      <a-menu-item key="1">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        服务器管理
      </a-menu-item>

      <a-menu-item key="2">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        服务器性能监控
      </a-menu-item>

      <a-menu-item key="3">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        docker监控
      </a-menu-item>

      <a-menu-item key="4">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
       redis监控
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <icon-apps></icon-apps>
        </template>     
      </a-menu-item>
         <a-menu-item key="6">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
       服务器位置监控
      </a-menu-item>
    </a-menu>
    
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.menu-demo {
  position: fixed;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

.menu-demo .arco-menu {
  width: 200px;
  height: 500px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.menu-demo .arco-menu :deep(.arco-menu-collapse-button) {
  background-color: #b4c3e7;

  width: 32px;
  height: 32px;
  border-radius: 50%;
}
  
.menu-demo .arco-menu:not(.arco-menu-collapsed) :deep(.arco-menu-collapse-button) {

  right: 0;
  bottom: 8px;
  transform: translateX(50%);
}

.menu-demo .arco-menu:not(.arco-menu-collapsed)::before {
  
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  background-color: inherit;
  border-radius: 50%;
  box-shadow: -4px 0 2px var(--color-bg-2), 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(50%);
}

.menu-demo .arco-menu.arco-menu-collapsed {
  width: 48px;
  height: auto;
  padding-top: 24px;
  padding-bottom: 138px;
  border-radius: 22px;
}

.menu-demo .arco-menu.arco-menu-collapsed :deep(.arco-menu-collapse-button) {
  right: 8px;
  bottom: 8px;
}
</style>