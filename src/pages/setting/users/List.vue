<script setup lang="ts">
import { usersHeader, users, userFilter } from "@/constants/settings";
const selectedItems = ref([]);
const modalOptions = ref({});
const modalState = ref(false);
const showPass = ref(false);
const showPass2 = ref(false);
const toggleDeleteModal = ({ uuid = "", options = {} }) => {
  modalOptions.value = options;
  modalState.value = !!Object.keys(options).length;
  uuid.length && selectedItems.value.push(uuid);
};

const isDeletionInProgress = ref(false);
const deleteMultiple = async () => {
  console.log("deleteMultiple");
  isDeletionInProgress.value = true;
  try {
  } catch {
  } finally {
    setTimeout(() => {
      toggleDeleteModal({});
      isDeletionInProgress.value = false;
    });
  }
};

const toggleEditModal = (uuid: string) => {
  modalOptions.value = {
    buttonColor: "#27AE60",
    buttonTitle: "Save changes",
    title: "Edit Role",
    text: "",
    svg: "edit (2)",
    icon: "",
    sheetColor: "#27AE601a",
  };
  modalState.value = true;
};
const restPassword = (uuid: string) => {
  modalOptions.value = {
    buttonColor: "#733EE4",
    buttonTitle: "Reset Password",
    title: "Reset Password",
    text: "",
    svg: "lock (1)",
    icon: "",
    sheetColor: "#733EE41a",
  };
  modalState.value = true;
};

const handleCancel = () => {
  toggleDeleteModal({});
};
const handleConfirm = () => {
  if (modalOptions.value.buttonTitle === "Yes, Delete") {
    deleteMultiple();
  }
  if (modalOptions.value.buttonTitle === "Reset Password") {
    restPassword(selectedItems.value[0]);
  }
  if (modalOptions.value.buttonTitle === "Save changes") {
    toggleEditModal(selectedItems.value[0]);
  }
};
</script>
<template>
  <div>
    <ListingHeader
      v-if="!selectedItems.length"
      placeholder="Search for user"
      :settings="false"
      pathName="add-users"
      addAction="Add User"
    />
    <TableFilters
      v-if="selectedItems.length"
      :filters="userFilter"
      @restPassword="restPassword(selectedItems[0])"
      @Delete="toggleDeleteModal"
      @edit="toggleEditModal"
    />
    <ListingItems
      @emitSelectedItems="selectedItems = $event"
      class="my-6"
      :headers="usersHeader"
      :items="users"
      :itemValue="'uuid'"
      routeDir="tickets"
    />
    <!-- // ! when integrate with backend -->
    <!-- <div class="w-100">
      <p class="my-auto text-9089B2">
        View
        {{ tableItems.length }} from {{ totalCount }}
      </p>
      <v-pagination
        v-if="pagesCount > 1"
        v-model="page"
        :length="pagesCount"
        @change="getNextProductsPage"
      />
    </div>
    -->
    <GlobalPopup
      :options="modalOptions"
      :modalState="modalState"
      :isDeletionInProgress="isDeletionInProgress"
      @closeModal="toggleDeleteModal"
      @deleteItem="deleteMultiple"
      :onCancel="handleCancel"
      :onConfirm="handleConfirm"
    >
      <section v-if="modalOptions.svg === 'lock (1)'">
        <VCol>
          <h4 class="card-info-title">New password</h4>
          <VRow>
            <VCol>
              <VTextField
                label=""
                density="compact"
                placeholder="Enter password"
                variant="outlined"
                hide-details
                bg-color="#faf9fe"
                :type="showPass ? 'text' : 'password'"
                @click:append-inner="showPass = !showPass"
                append-inner-icon="mdi-eye-off-outline"
                style="
                  color: #afaacb;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                "
              />
            </VCol>
          </VRow>
        </VCol>
        <VCol>
          <h4 class="card-info-title">Confirm password</h4>
          <VRow>
            <VCol>
              <VTextField
                label=""
                hide-details
                :type="showPass2 ? 'text' : 'password'"
                density="compact"
                placeholder="Enter password"
                variant="outlined"
                bg-color="#faf9fe"
                append-inner-icon="mdi-eye-off-outline"
                @click:append-inner="showPass2 = !showPass2"
                style="
                  color: #afaacb;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                "
              />
            </VCol>
          </VRow>
        </VCol>
      </section>
      <section v-if="modalOptions.svg === 'edit (2)'">
        <VCol>
          <h3 class="card-info-title">Role</h3>
          <VSelect
            bg-color="#faf9fe"
            label=""
            density="compact"
            variant="outlined"
            placeholder="Choose Role"
          />
        </VCol>
      </section>
    </GlobalPopup>
  </div>
</template>

<style scoped>
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
  text-align: left;
}
</style>
