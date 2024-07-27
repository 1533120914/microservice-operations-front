<template>
  <div class="layout-demo">
    <a-layout style="height: 100vh;">
      <a-layout-header>
        <div class="title" >天机监控系统</div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider theme="dark">Sider</a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.title{
  margin: 5vh;
  height:64px;
  width: 30vh;
  align-content: center;
   text-align: left;
    font-family: '宋体';
}
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}


.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-image:linear-gradient(120deg,#a1c4fd 0%, #c2e9fb 100%)
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: #dcdcdc;
}

.layout-demo :deep(.arco-layout-content) {
  background-color: white;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const go = () => router.push('/about')

onMounted(() => {

})

</script>