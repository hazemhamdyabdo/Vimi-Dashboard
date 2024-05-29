<script setup lang="ts">
import VerticalNavigation from '@/layout/VerticalNavigation.vue';
import HeaderView from '@/layout/Header.vue';
import navItems from '@/navigation/vertical';
</script>

<template>
  <div>
    <HeaderView />
    <div class="d-flex">
      <VerticalNavigation :navItems="navItems" />
      <div class="w-100">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
