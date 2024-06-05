<script setup lang="ts">
import { useUserStore } from '@/stores/user.state.js';

// Pinia Store
const userStore = useUserStore();

const props = defineProps(['navItems']);
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

const logout = async () => {
  try {
    await userStore.onLogout();
  } catch {}
};
</script>

<template>
  <v-card class="w-100">
    <v-layout>
      <v-navigation-drawer style="min-width: 304px; padding: 1rem 1rem">
        <template v-for="item in builtMenu">
          <v-list-item :subtitle="item.parent"></v-list-item>
          <v-list density="compact" nav style="margin-bottom: 2rem">
            <div v-for="child in item.children" :key="child.name">
              <RouterLink
                v-if="!child?.action"
                :to="child.path"
                class="text-decoration-none mb-2"
              >
                <SvgIcon :icon="child.icon" style="background: transparent" />
                <p class="pt-2" style="background: transparent">
                  {{ child.name }}
                </p>
              </RouterLink>
              <v-btn
                v-else
                flat
                class="action-btn text-decoration-none mb-2 w-100 d-flex justify-start py-5"
                @click="logout"
              >
                <SvgIcon
                  class="me-3 mt-2"
                  :icon="child.icon"
                  style="background: transparent"
                />
                <p class="pt-2" style="background: transparent">
                  {{ child.name }}
                </p>
              </v-btn>
            </div>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="background: #faf9fe; min-height: 100vh">
        <div class="pa-9">
          <RouterView />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
a,
.action-btn {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 1rem;
}
a:hover,
.action-btn:hover {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
}

.router-link-active .router-link-exact-active {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
}
a p,
.action-btn p {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
</style>
