<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#27ae60',
  },
  notification: {
    type: Boolean,
    default: false,
  },
  notificationText: {
    type: String,
    default: 'Done',
  },
});

const emit = defineEmits(['closeNotification']);
watch(
  () => props.notification,
  (val) => {
    if (val) {
      setTimeout(() => {
        emit('closeNotification');
      }, 2000);
    }
  }
);
</script>
<template>
  <VCol>
    <div
      class="d-flex align-items-center toast"
      :class="{ show: props.notification }"
      :style="`background: ${color}`"
      style="
        gap: 1rem;
        justify-content: center;
        border-radius: 8px;
        padding: 0.4rem 0;
        color: white;
        font-weight: 500;
        font-size: 18px;
      "
    >
      <SvgIcon
        :icon="color === '#27ae60' ? 'True-circle-fill' : 'close-cross'"
        :color="color"
      />
      <h5 class="my-auto">{{ notificationText }}</h5>
    </div>
  </VCol>
</template>

<style scoped lang="scss">
.toast {
  visibility: hidden;
  position: fixed;
  z-index: 4;
  top: 11vh;
  right: 10%;

  width: 70vw;

  &.show {
    visibility: visible;
    -webkit-animation:
      fadein 0.5s,
      fadeout 0.5s 2.5s;
    animation:
      fadein 0.5s,
      fadeout 0.5s 2.5s;
  }
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 70px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 70px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 70px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 70px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
