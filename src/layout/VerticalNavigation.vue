<script setup lang="ts">
import { useUserStore } from '@/stores/user.state.js';

// Pinia Store
const userStore = useUserStore();

const props = defineProps(['navItems', 'drawer', 'actions']);
const builtMenu = ref();
let rail = ref(false);

watch(
  () => props.drawer,
  (val) => {
    rail.value = val;
  }
);
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

const route = useRoute();
</script>

<template>
  <v-card class="w-100">
    <v-layout>
      <v-navigation-drawer
        fixed
        :width="305"
        :style="{ padding: !rail ? '1rem 1rem' : '0rem' }"
        :rail="rail"
        permanent
      >
        <template v-for="item in builtMenu">
          <v-list-item :subtitle="item.parent" v-if="!rail" />
          <v-list
            density="compact"
            nav
            class="mb-0"
            style="margin-bottom: 2rem"
          >
            <div v-for="child in item.children" :key="child.name">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <RouterLink
                    v-bind="props"
                    :style="{
                      background: isHovering
                        ? !rail
                          ? '#733ee4'
                          : '#f6f5f7'
                        : undefined,
                      color: isHovering && !rail ? '#fff' : undefined,
                    }"
                    style="border-radius: 8px"
                    :to="child.path"
                    class="d-flex align-items-center"
                    :class="
                      !rail
                        ? 'text-decoration-none px-4 py-3 my-3'
                        : 'py-2 my-5 d-flex justify-center'
                    "
                    :exactActiveClass="!rail ? 'active-link' : ''"
                  >
                    <SvgIcon
                      :icon="child.icon"
                      style="background: transparent"
                      :class="rail ? 'mx-auto' : ''"
                      class="my-auto"
                    />
                    <p
                      class="my-auto"
                      style="
                        background: transparent;
                        /* 16/B1-M-16 */
                        font-family: Roboto;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 24px */
                      "
                      v-if="!rail"
                    >
                      {{ child.name }}
                    </p>
                  </RouterLink>
                </template>
              </v-hover>
            </div>
          </v-list>
        </template>
        <template v-for="action in props.actions">
          <v-list density="compact" nav style="margin-bottom: 2rem">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <VBtn
                  variant="flat"
                  :class="
                    !rail
                      ? 'text-decoration-none mb-2 px-4 py-2 w-100 mb-2 d-flex justify-start py-6'
                      : ''
                  "
                  icon
                  style="border-radius: 8px"
                  v-bind="props"
                  :color="isHovering && !rail ? '#733ee4' : undefined"
                  @click="logout"
                >
                  <SvgIcon
                    :class="!rail ? 'me-3' : 'mx-auto'"
                    :icon="action.icon"
                    class="my-auto"
                  />
                  <p
                    class="my-auto"
                    style="
                      background: transparent;
                      /* 16/B1-M-16 */
                      font-family: Roboto;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 150%; /* 24px */
                    "
                    v-if="!rail"
                  >
                    {{ action.name }}
                  </p>
                </VBtn>
              </template>
            </v-hover>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="background: #faf9fe; min-height: 100vh">
        <div class="pl-12" v-if="route.fullPath.includes('/promotion')">
          <VCard flat color="#21094A" class="px-8 d-flex mb-6">
            <router-link
              :to="{ name: 'promotion-discounts' }"
              exact-active-class="active-prmotion-link"
              class="me-8 text-decoration-none pt-4"
            >
              <p
                style="
                  color: var(--White, #fff);
                  /* 16/B1-B-16 */
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 24px */
                "
              >
                Discounts List
              </p>
            </router-link>
            <router-link
              :to="{ name: 'promotion-ads' }"
              exact-active-class="active-prmotion-link"
              class="me-8 text-decoration-none pt-4"
            >
              <p
                style="
                  color: var(--White, #fff);
                  /* 16/B1-B-16 */
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 150%; /* 24px */
                "
              >
                Ads List
              </p>
            </router-link>
          </VCard>
        </div>
        <div class="pa-9">
          <RouterView />
        </div>
      </v-main>
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
}
/* a:hover {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
} */

.router-link-active .router-link-exact-active {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
}
.active-link {
  background: #733ee4;
  border-radius: 8px;
  color: #fff;
}

a p {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

.active-prmotion-link {
  border-bottom: 4px solid var(--Purple, #733ee4);
  text-decoration: none;
  color: #fff;
}
</style>
