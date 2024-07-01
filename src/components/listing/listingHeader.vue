<script lang="ts" setup>
withDefaults(
  defineProps<{
    addAction: string;
    placeholder: string;
    pathName?: string;
    labelDate?: string;
    settings?: boolean;
  }>(),
  {
    pathName: '',
    settings: true,
  }
);

let search = ref('');
const emit = defineEmits(['updateSearch']);

watch(
  () => search.value,
  (val) => {
    emit('updateSearch', val);
  }
);
</script>

<template>
  <div class="d-flex" style="align-items: center">
    <v-card
      v-if="settings"
      flat
      bg-color="#fff"
      max-height="48"
      class="px-3 pt-3 pb-2 border-sm rounded-lg my-auto mr-4 cursor-pointer"
      style="max-width: fit-content"
    >
      <img src="@/assets/svgs/settings-sliders.svg" />
    </v-card>
    <div class="d-flex" style="gap: 1rem; align-items: center">
      <v-card
        flat
        bg-color="#fff"
        class="mx-auto border-sm rounded-lg"
        min-width="549"
        max-height="48"
      >
        <v-text-field
          class="my-auto px-4 py-1 mb-2"
          variant="plain"
          density="compact"
          hide-details
          single-line
          v-model="search"
        >
          <template v-slot:prepend-inner>
            <img src="@/assets/svgs/search.svg" />
          </template>
          <template v-slot:label>
            <p class="body-2">{{ placeholder }}</p>
          </template>
        </v-text-field>
      </v-card>
      <div style="margin-top: 1rem">
        <GDatePicker
          v-if="labelDate"
          :label="labelDate"
          class="mt-8"
          style="width: 15rem"
          bg-color="#fff"
        />
      </div>
    </div>
    <v-spacer />
    <div v-if="pathName" class="flex my-auto">
      <router-link :to="{ name: pathName }">
        <v-btn flat color="#733EE4" class="rounded-lg" height="48">
          <v-icon size="20"> mdi-plus </v-icon>
          <p>
            {{ addAction }}
          </p>
        </v-btn>
      </router-link>
    </div>
  </div>
</template>
