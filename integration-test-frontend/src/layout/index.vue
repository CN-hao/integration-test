<script setup lang="ts">
import sideBar from '@/layout/components/sideBar/index.vue'
import Header from './components/Header/index.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="menu border-right">
        <side-bar></side-bar>
      </div>
      <div class="col">
        <Header></Header>
      </div>
    </div>
  </div>
</template>

<style scoped>

.col {
  padding-left: 0;  /* 去掉左侧内边距 */
  padding-right: 0; /* 去掉右侧内边距 */
}

</style>
