<script setup lang="ts">
const permissions = ref([
  {
    id: 1,
    label: "Dashboard",
    permissions: [
      {
        id: 1,
        name: "Create",
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
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
        value: "create",
      },
      {
        id: 2,
        name: "Add",
        value: "add",
      },
      {
        id: 3,
        name: "Edit",
        value: "edit",
      },
      {
        id: 4,
        name: "Delete",
        value: "delete",
      },
      {
        id: 5,
        name: "all",
        value: "all",
      },
    ],
  },
]);
</script>
<template>
  <section class="px-6">
    <VContainer>
      <VRow>
        <VCol cols="12">
          <VRow>
            <VCol cols="6">
              <VCard class="card">
                <h3 class="card-title mb-4">Main information</h3>
                <VRow disable-gutters style="gap: 1rem">
                  <VCol cols="12">
                    <h4 class="card-info-title">Role Name</h4>
                    <VTextField
                      label=""
                      density="compact"
                      placeholder="Enter role name"
                      variant="outlined"
                      class="card-info-input"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol cols="12">
                    <h4 class="card-info-title">Role description</h4>
                    <VTextarea
                      bg-color="#FAF9FE"
                      variant="outlined"
                      density="compact"
                      rows="12"
                      placeholder="Write role description"
                      hide-details
                      style="
                        margin-bottom: 1rem;
                        border-radius: 8px;
                        border: 1px solid #e8e7ef;
                      "
                    />
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
            <VCol cols="6">
              <VCard class="card">
                <h3 class="card-title text-right mb-4">المعلومات الأساسية</h3>
                <VRow disable-gutters style="gap: 1rem; direction: rtl">
                  <VCol cols="12">
                    <h4 class="card-info-title">إسم الدور</h4>
                    <VTextField
                      label=""
                      density="compact"
                      placeholder="أدخل إسم الدور"
                      variant="outlined"
                      class="card-info-input"
                      dir="rtl"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                  <VCol cols="12">
                    <h4 class="card-info-title">وصف الدور</h4>
                    <VTextarea
                      bg-color="#FAF9FE"
                      variant="outlined"
                      density="compact"
                      rows="12"
                      placeholder="ادخل وصف الدور"
                      hide-details
                      style="
                        margin-bottom: 1rem;
                        border-radius: 8px;
                        border: 1px solid #e8e7ef;
                      "
                      dir="rtl"
                    />
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
          </VRow>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="4">
          <VRow>
            <VCol>
              <VCard class="card" height="500px">
                <h3 class="card-title mb-4">Users</h3>
                <VRow disable-gutters style="gap: 1rem">
                  <VCol>
                    <VAutocomplete
                      label=""
                      density="compact"
                      prepend-inner-icon="mdi-magnify"
                      placeholder="Choose specific user"
                      variant="outlined"
                      class="card-info-input"
                      bg-color="#faf9fe"
                      style="
                        color: #afaacb;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                      "
                    />
                  </VCol>
                </VRow>
              </VCard>
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VCard class="card">
                <h3 class="card-title mb-8">Status</h3>
                <div
                  style="
                    height: fit-content;
                    padding: 0px 12px;
                    border-radius: 6px;
                    background: rgba(115, 62, 228, 0.05);
                  "
                >
                  <v-radio-group
                    inline
                    hide-details
                    style="
                      display: flex;
                      justify-content: space-between;
                      width: 100%;
                    "
                  >
                    <v-radio
                      label="Active"
                      value="Active"
                      color="primary"
                      style="margin-right: 10rem"
                    ></v-radio>
                    <v-radio
                      label="Inactive"
                      value="Inactive"
                      color="primary"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </VCard>
            </VCol>
          </VRow>
        </VCol>
        <VCol cols="8">
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
                  <VCol v-for="role in per.permissions" :key="role.id">
                    <VSwitch :label="role.name" color="#733EE4" hide-details />
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div class="add-products-actions" style="display: flex; justify-content: end">
    <VBtn
      class=""
      style="margin-right: 1rem"
      variant="text"
      @click="$router.go(-1)"
      >Cancel</VBtn
    >
    <VBtn
      class=""
      style="margin-right: 1rem"
      variant="elevated"
      color="#733ee4"
    >
      <VIcon class="card-info-btn-icon" icon="mdi-plus" />
      Add Role
    </VBtn>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
  &-title {
    color: #21094a;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 0.7rem;
  }
  &-info-title {
    color: #afaacb;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0.8rem;
    padding-left: 0.4rem;
  }
}

.add-products-actions {
  padding: 1rem 2rem 2rem 2rem;
}

:global(.v-field__outline__start) {
  border-radius: 8px;
  display: none;
}
:global(.v-field__outline__end) {
  border-radius: 8px;
  display: none;
}

:global(.v-switch__thumb) {
  background: #9089b2;
}

:global(.v-switch__track) {
  background: #e9e7f2;
}
</style>
