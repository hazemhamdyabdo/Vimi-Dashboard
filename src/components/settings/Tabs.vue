<script setup lang="ts">
interface Components {
  component: string;
  label: string;
}
defineProps<{ components: Components[] }>();
const emit = defineEmits(["update:activeTab"]);
const activeTab = ref(null);
watch(
  () => activeTab.value,
  (value) => {
    if (value) {
      emit("update:activeTab", value);
    }
  }
);
</script>

<template>
  <v-card>
    <v-tabs v-model="activeTab" bg-color="#21094A">
      <v-tab
        v-for="component in components"
        :key="component.label"
        :value="component.component"
        >{{ component.label }}</v-tab
      >
    </v-tabs>
  </v-card>
</template>

<style scoped lang="scss">
.v-tab {
  color: #afaacb;
}

.v-tab-item--selected {
  color: #fff;
}

:global(.v-tab__slider) {
  background: #733ee4;
}
</style>
