<script lang="ts" setup>
withDefaults(
  defineProps<{
    addAction: string;
    placeholder: string;
    pathName?: string;
    labelDate?: string;
  }>(),
  {
    pathName: '',
  }
);
</script>

<template>
  <div class="d-flex">
    <v-card
      flat
      bg-color="#fff"
      max-height="48"
      class="px-3 pt-3 pb-2 border-sm rounded-lg my-auto mr-4 cursor-pointer"
      style="max-width: fit-content"
    >
      <img src="@/assets/svgs/settings-sliders.svg" />
    </v-card>
    <v-card
      flat
      bg-color="#fff"
      class="mx-auto border-sm rounded-lg"
      min-width="549"
      max-height="48"
    >
      <v-text-field
        class="my-auto px-4 py-1"
        variant="plain"
        density="compact"
        hide-details
        single-line
      >
        <template v-slot:prepend-inner>
          <img src="@/assets/svgs/search.svg" />
        </template>
        <template v-slot:label>
          <p class="body-2">{{ placeholder }}</p>
        </template>
      </v-text-field>
    </v-card>
    <v-spacer />
    <GDatePicker v-if="labelDate" :label="labelDate" />
    <div v-else-if="pathName" class="flex my-auto">
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
