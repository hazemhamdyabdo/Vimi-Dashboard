<script setup lang="ts">
const dropdownOptions = {
  showDialCodeInSelection: true,
  showFlags: true,
};
const showPass = ref(false);
const showConfirmPass = ref(false);
</script>
<template>
  <section class="px-6">
    <VContainer>
      <VRow>
        <VCol cols="8">
          <VCol class="mb-4">
            <VCard class="card card-products">
              <h3 class="card-title mb-6">Main information</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol>
                  <h4 class="card-info-title">Customer Name</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter customer name"
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
                <VCol>
                  <h4 class="card-info-title">Email</h4>
                  <VTextField
                    label=""
                    type="email"
                    density="compact"
                    placeholder="Enter customer name"
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
              <VRow disable-gutters style="gap: 1rem">
                <VCol>
                  <h4 class="card-info-title">Phone</h4>
                  <vue-tel-input
                    mode="internal"
                    placeholder="Enter Phone number"
                    defaultCountry="kw"
                    autoFormat
                    :dropdownOptions="dropdownOptions"
                    enabledCountryCode
                    class="card-info-input"
                    :onlyCountries="['kw']"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      height: 40px;
                      background-color: #faf9fe;
                      border-radius: 8px;
                      border: none;
                      border: 1px solid #e8e7ef;
                    "
                  ></vue-tel-input>
                </VCol>
                <VCol>
                  <h3 class="card-info-title">Joining date</h3>
                  <GDatePicker label="Joining date" bg-color="#faf9fe" />
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <VCard class="card card-info">
              <h3 class="card-title mb-6">Password</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol style="position: relative">
                  <h4 class="card-info-title">Password</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter Password"
                    variant="outlined"
                    :type="showPass ? 'text' : 'password'"
                    class="card-info-input"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  >
                    <template v-slot:append-inner>
                      <img
                        class="cursor-pointer"
                        src="@/assets/svgs/eye.svg"
                        @click="showPass = !showPass"
                      />
                    </template>
                  </VTextField>
                </VCol>
                <VCol style="position: relative">
                  <h4 class="card-info-title">Confirm Password</h4>
                  <VTextField
                    label=""
                    :type="showConfirmPass ? 'text' : 'password'"
                    density="compact"
                    placeholder="Enter Password"
                    variant="outlined"
                    class="card-info-input"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  >
                    <template v-slot:append-inner>
                      <img
                        class="cursor-pointer"
                        src="@/assets/svgs/eye.svg"
                        @click="showConfirmPass = !showConfirmPass"
                      />
                    </template>
                  </VTextField>
                </VCol>
              </VRow>
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="4">
          <VCol class="mb-4">
            <VCard class="card card-products" style="margin-bottom: 1rem">
              <h3 class="card-title">User Images</h3>
              <VCard flat>
                <VFileInput
                  label=""
                  class="card-file-input"
                  prepend-icon="mdi-upload-multiple"
                ></VFileInput>
                <VCard class="card-file-ui ma-1">
                  <div
                    style="
                      height: inherit;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 0.7rem;
                      justify-content: center;
                    "
                  >
                    <img src="@/icons/upload.svg" style="cursor: pointer" />
                    <img v-if="false" src="@/assets/multivitamin.png" />
                    <p class="card-file-text text-decoration-underline">
                      Upload Image
                    </p>
                    <div class="text-center">
                      <p class="card-file-subtitle my-1">
                        Max image 5MB jpg, png, jpeg
                      </p>
                    </div>
                  </div>
                </VCard>
              </VCard>
            </VCard>
          </VCol>
          <VCol>
            <VCard class="card p-4" style="margin-bottom: 2rem">
              <h3 class="card-title mb-8">Status</h3>
              <div
                style="
                  height: fit-content;
                  padding: 0px 12px;
                  border-radius: 6px;
                  background: rgba(115, 62, 228, 0.05);
                "
              >
                <v-radio-group inline hide-details>
                  <v-radio
                    label="Active"
                    value="active"
                    color="primary"
                    class="me-14"
                  />
                  <v-radio label="Block" value="block" color="primary" />
                </v-radio-group>
              </div>
            </VCard>
          </VCol>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div
    class="add-products-actions"
    style="display: flex; justify-content: end; gap: 0.8rem"
  >
    <v-btn flat color="#fff" class="rounded-lg me-2" height="48" width="162">
      <p>Cancel</p>
    </v-btn>
    <v-btn flat color="#733EE4" class="rounded-lg" height="48" width="162">
      <v-icon size="20"> mdi-plus </v-icon>
      <p>Add Customer</p>
    </v-btn>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem 1rem;
  box-shadow: none;
}
.add-products-actions {
  padding: 1rem 2rem 2rem 2rem;
}
.card-file-input {
  width: 96px;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
.card-file-subtitle {
  color: #9089b2;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.card-info-title {
  color: #afaacb;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.8rem;
  padding-left: 0.4rem;
}
.card-file-text {
  color: #733ee4;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.card-file-ui {
  border-radius: 6px;
  height: 276px;
  border: 1px dashed var(--Purple, #733ee4);
  background: rgba(115, 62, 228, 0.05);
  box-shadow: none;
}
</style>
<style>
.v-field__outline__start {
  display: none;
}
.v-field__outline__end {
  border-radius: 12px !important;
  border: 1px solid #e8e7ef !important;
}
.ql-toolbar.ql-snow {
  border: none;
  position: absolute;
  left: 0.8rem;
  bottom: 0.6rem;
  width: 100%;
  z-index: 1;
}
.ql-container.ql-snow {
  color: #7066a2;
}
</style>
