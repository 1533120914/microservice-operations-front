<template>
  <div class="flex flex-col">
    <a-layout-header class="layout-navbar">
      <Navbar />
    </a-layout-header>

    <a-layout class="overflow-x-hidden flex-1">
      <a-layout-content class="layoutContent h-full">
        <Menu></Menu>
        <div class="h-full p-2 box-border">
          <slot></slot>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import Navbar from './navbar.vue';
import Menu from './menu.vue';
</script>
