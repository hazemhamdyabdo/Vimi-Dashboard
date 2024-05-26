<script setup lang="ts">
const props = defineProps(["navItems"]);
const builtMenu = ref();
builtMenu.value = props.navItems.reduce((acc: any, item: any) => {
  if (item.children && item.children.length > 0) {
    item.isOpen = false;
    item.children = item.children.reduce((acc: any, child: any) => {
      acc.push(child);
      return acc;
    }, []);
  }
  acc.push(item);
  return acc;
}, []);

// const setItemOpen = (item: any) => {
//   item.isOpen = !item.isOpen;
// };

// const isOpen = (item: any) => {
//   return item.isOpen;
// };
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer style="width: 268px">
        <template v-for="item in builtMenu">
          <v-list-item :subtitle="item.parent"></v-list-item>
          <v-list density="compact" nav style="margin-bottom: 2rem">
            <RouterLink
              v-for="child in item.children"
              :to="child.path"
              :key="child.name"
              class="text-decoration-none mb-2"
            >
              <SvgIcon :icon="child.icon" style="background: transparent" />
              <p class="pt-2" style="background: transparent">
                {{ child.name }}
              </p>
            </RouterLink>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 95dvh"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 1rem;
}
a:hover {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
}
</style>
