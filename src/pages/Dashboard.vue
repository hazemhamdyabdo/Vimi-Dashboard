<script setup lang="ts">
import VerticalNavigation from '@/layout/VerticalNavigation.vue';
import HeaderView from '@/layout/Header.vue';
import { navItems, actions } from '@/navigation/vertical';

const drawer = ref(false);
</script>

<template>
  <div>
    <HeaderView @toggleDrawer="drawer = $event" />
    <VerticalNavigation
      :navItems="navItems"
      :actions="actions"
      :drawer="drawer"
    />
  </div>
</template>

<style scoped></style>
