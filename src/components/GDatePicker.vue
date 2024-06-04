<template>
  <v-menu v-model="isMenuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
        :model-value="formattedDate"
        readonly
        :placeholder="label"
        :variant="border ? 'plain' : 'outlined'"
        append-inner-icon="mdi-calendar"
        :bg-color="bgColor"
        v-bind="{ ...props, ...$attrs }"
        density="compact"
        hide-details
        class="text-field"
        :class="applyStyle"
        height="40px"
      ></v-text-field>
    </template>
    <v-date-picker
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
      const newDate = newVal;
      this.$emit("update:modelValue", newDate);
    },
    modelValue(newVale) {
      this.selectedDate = newVale ? new Date(newVale) : new Date();
    },
  },
};
</script>
