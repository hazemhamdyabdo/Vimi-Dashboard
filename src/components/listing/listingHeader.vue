<template>
  <div classs="d-flex w-100">
    <div class="d-flex w-100">
      <v-card
        flat
        bg-color="#fff"
        max-height="48"
        class="px-3 pt-3 pb-2 border-sm rounded-lg my-auto mr-4 cursor-pointer"
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
            <p class="body-2">Search , ID , SKU , Product name</p>
          </template>
        </v-text-field>
      </v-card>
      <v-spacer />
      <div class="flex my-auto">
        <v-btn flat color="#733EE4" class="rounded-lg" height="48">
          <v-icon size="20"> mdi-plus </v-icon>
          <p>Add Product</p>
        </v-btn>
      </div>
    </div>
  </div>
</template>
