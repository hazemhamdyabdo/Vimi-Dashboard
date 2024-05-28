<script setup lang="ts">
import VerticalNavigation from "@/layout/VerticalNavigation.vue";
import HeaderView from "@/layout/Header.vue";
import navItems from "@/navigation/vertical";
</script>

<template>
  <div>
    <HeaderView />
    <VerticalNavigation :navItems="navItems" />
    <RouterView />
  </div>
</template>

<style scoped></style>
