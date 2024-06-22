<script setup lang="ts">
import { useStyleState } from "@/composables/UseStyleState";
const { getStyleStatus } = useStyleState();
const router = useRouter();
const isUserDetails = computed(() => {
  return router.currentRoute.value.path.includes("users");
});
const isMyAccount = computed(() => {
  return router.currentRoute.value.path.endsWith("settings");
});
</script>
<template>
  <VCol>
    <VCard
      class="card px-4"
      style="
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;
      "
    >
      <section style="display: flex; gap: 1rem; align-items: center">
        <div style="display: flex; gap: 0.7rem; align-items: center">
          <SvgIcon icon="event calendar" />
          <p style="color: #9089b2; font-size: 16px">
            Creation date:
            <span style="color: #21094a; font-weight: 500">{{
              new Date().toLocaleDateString()
            }}</span>
          </p>
        </div>
        <p
          class="px-2 py-1 text-subtitle-1"
          style="
            max-width: 150px;
            font-size: 12px;
            padding: 0.2rem 0;
            border-radius: 8px;
          "
          :style="`background-color: ${getStyleStatus('Active')?.background}; color: ${getStyleStatus('Active')?.color}`"
        >
          Active
        </p>
      </section>
      <section style="display: flex; gap: 1rem; align-items: center">
        <div
          v-if="isUserDetails"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="lock" />
          <p style="color: #21094a; font-size: 14px">Reset Password</p>
          |
        </div>

        <div
          v-if="!isMyAccount"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="edit (1)" />
          <p style="color: #21094a; font-size: 14px">Edit</p>
          |
        </div>
        <div
          v-if="isUserDetails"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="block" />
          <p style="color: #21094a; font-size: 14px">Block</p>
          |
        </div>
        <div
          v-if="!isMyAccount"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="delete (1)" />
          <p style="color: #21094a; font-size: 14px">Delete</p>
        </div>
        <div
          v-if="isMyAccount"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="lock" />
          <p style="color: #21094a; font-size: 14px">Reset Password</p>
          |
        </div>
        <div
          v-if="isMyAccount"
          style="display: flex; align-items: center; gap: 0.5rem"
        >
          <SvgIcon icon="camera" />
          <p style="color: #21094a; font-size: 14px">Change image</p>
        </div>
      </section>
    </VCard>
  </VCol>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
}
</style>
