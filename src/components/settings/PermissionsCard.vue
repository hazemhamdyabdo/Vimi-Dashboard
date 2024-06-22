<script setup lang="ts">
const permissions = ref([
  {
    id: 1,
    label: "Dashboard",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: true,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 2,
    label: "Products",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: false,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: false,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 3,
    label: "Categories",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: true,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: false,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 4,
    label: "Orders",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: true,
      },
      {
        id: 2,
        name: "Add",
        value: false,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: true,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 5,
    label: "Customers",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: false,
      },
      {
        id: 2,
        name: "Add",
        value: false,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 6,
    label: "Tickets",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: true,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: false,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 7,
    label: "Promotion",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: false,
      },
      {
        id: 2,
        name: "Add",
        value: false,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 8,
    label: "Push Notifications",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: false,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: false,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
  {
    id: 9,
    label: "Setting",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: false,
      },
      {
        id: 2,
        name: "Add",
        value: true,
      },
      {
        id: 3,
        name: "Edit",
        value: true,
      },
      {
        id: 4,
        name: "Delete",
        value: true,
      },
      {
        id: 5,
        name: "all",
        value: true,
      },
    ],
  },
]);
</script>
<template>
  <VCol>
    <VCard class="card">
      <h3 class="card-title mb-8">Permissions</h3>
      <VRow
        v-for="per in permissions"
        :key="per.id"
        disable-gutters
        style="gap: 1rem"
      >
        <VCol>
          <h4 class="card-info-title">{{ per.label }}</h4>
          <VRow disable-gutters style="gap: 1rem; display: flex">
            <VCol
              v-for="role in per.permissions"
              :key="role.id"
              class="mt-4"
              style="gap: 0.4rem; display: flex; align-items: center"
            >
              <SvgIcon :icon="role.value ? 'True' : 'Cross'" />
              <p>{{ role.name }}</p>
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </VCard>
  </VCol>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 2rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-title {
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}
</style>
