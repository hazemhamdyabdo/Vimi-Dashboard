<template>
  <v-menu v-model="isMenuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-card
        flat
        class="rounded-lg mb-4 d-flex"
        height="48"
        style="
          border-radius: 8px;
          border: 1px solid #e8e7ef;
          background: #faf9fe;
        "
      >
        <v-text-field
          class="my-auto px-4 pb-1 my-auto"
          variant="plain"
          :placeholder="label"
          density="compact"
          hide-details
          single-line
          readonly
          :model-value="formattedDate"
          v-bind="{ ...props, ...$attrs }"
        >
          <template v-slot:append-inner>
            <calenderIcon color="#733EE4" width="20" height="20" />
          </template>
        </v-text-field>
      </v-card>
    </template>
    <v-date-picker
      class="mt-2"
      v-model="selectedDate"
      hide-actions
      title=""
      :min="min"
      @input="isMenuOpen = false"
      :color="color"
    >
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Date,
      default: "",
    },
    bgColor: {
      type: String,
      default: "#faf9fe",
    },
    border: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    min: {
      type: Date,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isMenuOpen: false,
      selectedDate: this.modelValue ? new Date(this.modelValue) : undefined,
    };
  },
  computed: {
    formattedDate() {
      return this.selectedDate
        ? this.selectedDate?.toLocaleDateString("en-CA")
        : "";
    },
    applyStyle() {
      return this.border ? "border-sm rounded-lg px-4 py-1 bg-white" : "";
    },
  },
  watch: {
    selectedDate(newVal) {
      const newDate = newVal?.toLocaleDateString("en-CA");
      this.$emit("update:modelValue", newDate);
    },
    modelValue(newVale) {
      // this.selectedDate = newVale ? new Date(newVale) : new Date();
    },
  },
};
</script>
