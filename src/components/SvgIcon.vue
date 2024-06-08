<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    classes: {
      type: String,
      default: 'svg-container flex items-center justify-center',
    },
  },
  data() {
    return {
      svgContent: null,
    };
  },
  async created() {
    const response = await fetch(`/src/icons/${this.icon}.svg`);
    // fetch(`src/icons/${this.icon}.svg`);
    this.svgContent = await response.text();
  },
};
</script>

<template>
  <span :class="[classes, 'svg-icon-container']" v-html="svgContent" />
</template>

<style scoped>
.svg-container {
  display: inline-flex;
}
</style>
