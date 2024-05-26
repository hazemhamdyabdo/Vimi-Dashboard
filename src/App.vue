<script setup lang="ts">
import VerticalNavigation from "./layout/VerticalNavigation.vue";
import HeaderView from "./layout/Header.vue";
import navItems from "@/navigation/vertical";
</script>

<template>
  <v-app>
    <HeaderView />
    <VerticalNavigation :navItems="navItems" />
  </v-app>
  <!-- <RouterView /> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montagu Slab", serif;
}
</style>
