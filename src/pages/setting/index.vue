<script setup lang="ts">
import roles from "./roles/List.vue";
import users from "./users/List.vue";
import block from "./blocks/index.vue";
import account from "./account/index.vue";
const components = [
  {
    component: roles,
    label: "Roles & Permissions",
  },
  {
    component: users,
    label: "Users",
  },
  {
    component: block,
    label: "Blocks",
  },
  {
    component: account,
    label: "My Account",
  },
];
const activeTab = ref("");
</script>

<template>
  <main class="px-12 w-100">
    <Tabs :components="components" @update:activeTab="activeTab = $event" />
    <section class="mt-6">
      <component :is="activeTab"></component>
    </section>
  </main>
</template>
