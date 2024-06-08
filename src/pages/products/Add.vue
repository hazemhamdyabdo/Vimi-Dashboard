<script setup lang="ts">
const isMenuOpen = ref(false);
</script>
<template>
  <section class="add-products px-6">
    <VContainer>
      <VRow>
        <VCol cols="8">
          <VCol>
            <VCard class="card card-products" style="margin-bottom: 1rem">
              <h3 class="card-title">Add Products</h3>
              <VCard class="card-file">
                <VFileInput
                  label=""
                  class="card-file-input"
                  prepend-icon="mdi-upload-multiple"
                ></VFileInput>
                <VCard class="card-file-ui">
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
                    <p class="card-file-text underline">Upload Image</p>
                  </div>
                </VCard>
              </VCard>
            </VCard>
          </VCol>
          <VCol>
            <VCard class="card card-info">
              <h3 class="card-title">Main information</h3>
              <VRow disable-gutters style="gap: 1rem">
                <VCol cols="12">
                  <h4 class="card-info-title">Product Name</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter product name"
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
                  <h4 class="card-info-title">Short description</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter short description"
                    variant="outlined"
                    class="card-info-input"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  ></VTextField>
                </VCol>
                <VCol cols="12" style="position: relative">
                  <h4 class="card-info-title">General info</h4>
                  <Editor
                    theme="snow"
                    toolbar="essentials"
                    placeholder="Write info"
                    style="
                      border: 1px solid #e8e7ef;
                      border-radius: 8px;
                      background: #faf9fe;
                      height: 150px;
                      margin-bottom: 0rem;
                    "
                  />
                </VCol>
                <VCol cols="12" style="position: relative">
                  <h4 class="card-info-title">Suggested use</h4>
                  <Editor
                    theme="snow"
                    toolbar="essentials"
                    placeholder="Write suggested use"
                    style="
                      border: 1px solid #e8e7ef;
                      border-radius: 8px;
                      background: #faf9fe;
                      height: 150px;
                    "
                  />
                </VCol>
              </VRow>
              <VRow disable-gutters style="gap: 1rem">
                <VCol>
                  <h4 class="card-info-title">Category</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose category"
                    class="card-info-list"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                </VCol>
                <VCol>
                  <h4 class="card-info-title">Sub category</h4>
                  <v-select
                    label=""
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    placeholder="Choose sub category"
                    class="card-info-list"
                    :items="[
                      'California',
                      'Colorado',
                      'Florida',
                      'Georgia',
                      'Texas',
                      'Wyoming',
                    ]"
                  ></v-select>
                </VCol>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <VCard
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <h3 class="card-title">Warehouse</h3>
              <VRow>
                <v-col cols="6">
                  <h4 class="card-info-title">SKU</h4>
                  <VTextField
                    label=""
                    placeholder="Enter SKU"
                    density="compact"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  ></VTextField>
                </v-col>
                <v-col cols="6">
                  <h4 class="card-info-title">Stock Quantity</h4>
                  <VTextField
                    label=""
                    density="compact"
                    placeholder="Enter quantity"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  ></VTextField>
                </v-col>
              </VRow>
            </VCard>
          </VCol>
          <VCol>
            <VCard
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <h3 class="card-title">Pricing</h3>
              <VRow>
                <v-col cols="6">
                  <h4 class="card-info-title">Price</h4>
                  <VTextField
                    label=""
                    placeholder="Enter price"
                    density="compact"
                    variant="outlined"
                    type="number"
                    suffix="KD"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  />
                </v-col>
                <v-col cols="6">
                  <h4 class="card-info-title">Sale price</h4>
                  <VTextField
                    label=""
                    suffix="KD"
                    type="number"
                    density="compact"
                    placeholder="Enter price"
                    variant="outlined"
                    bg-color="#faf9fe"
                    style="
                      color: #afaacb;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                    "
                  />
                </v-col>
                <VMenu v-model="isMenuOpen" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                    <span
                      style="color: #733ee4; cursor: pointer"
                      class="pa-4"
                      v-bind="props"
                    >
                      Schedule discount
                    </span>
                  </template>
                  <VDatePicker
                    @input="isMenuOpen = false"
                    label=""
                    density="compact"
                  />
                </VMenu>
              </VRow>
            </VCard>
          </VCol>
          <!-- in case edit show -->
          <VCol>
            <VCard
              class="card card-Warehouse"
              style="margin-bottom: 1rem; margin-top: 1rem"
            >
              <ReviewRating
                title="Reviews"
                deleteIcon
                name="John Doe"
                date="25 oct 2022"
                description="hi i am description here"
                :numberOfRecords="3"
              />
            </VCard>
          </VCol>
        </VCol>
        <VCol cols="4" class="pt-5">
          <VCard class="card card-type" style="margin-bottom: 2rem">
            <h3 class="card-title">Type</h3>
            <v-col cols="12" class="px-2 pr-6">
              <v-select
                label=""
                density="compact"
                variant="outlined"
                bg-color="#faf9fe"
                placeholder="Choose type"
                style="margin-left: -0.5rem; width: 106%"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-select>
            </v-col>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title mb-8">Tags</h3>
            <VRow>
              <VCol cols="10">
                <VTextField
                  label=""
                  density="compact"
                  placeholder="Write tag"
                  variant="outlined"
                  bg-color="#faf9fe"
                  style="color: #afaacb; font-size: 14px"
                />
              </VCol>
              <VCol cols="2">
                <VBtn class="card-info-btn" color="#21094a" variant="outlined">
                  <VIcon icon="mdi-plus" color="#21094a"></VIcon>
                </VBtn>
              </VCol>

              <VCol cols="12">
                <VTextarea
                  label=""
                  placeholder="Write suggested use"
                  variant="outlined"
                  rows="4"
                  type="text-area"
                  bg-color="#faf9fe"
                  style="color: #afaacb"
                />
              </VCol>
            </VRow>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title mb-8">Visibility</h3>
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
                  label="Published"
                  value="published"
                  color="primary"
                  style="margin-right: 6rem"
                ></v-radio>
                <v-radio
                  label="Hidden"
                  value="hidden"
                  color="primary"
                ></v-radio>
              </v-radio-group>
            </div>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title mb-8">Expiry date</h3>
            <GDatePicker label="Expiry date" bg-color="#faf9fe" />
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title">Brand</h3>
            <v-col cols="12">
              <v-select
                label=""
                density="compact"
                variant="outlined"
                bg-color="#faf9fe"
                placeholder="Choose brand"
                style="margin-left: -0.5rem"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-select>
            </v-col>
          </VCard>
          <VCard class="card card-tags" style="margin-bottom: 2rem">
            <h3 class="card-title">Style</h3>
            <VCol cols="12" class="px-0 pl-2" style="margin-left: -0.6rem">
              <h4 class="card-info-title">Weight</h4>
              <VTextField
                label=""
                suffix="gm"
                type="number"
                density="compact"
                placeholder="Enter weight"
                variant="outlined"
                bg-color="#faf9fe"
                style="
                  color: #afaacb;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                "
              />
            </VCol>
            <h4 class="card-info-title">Dimensions</h4>
            <v-row class="mb-6 pe-2" no-gutters style="gap: 2rem">
              <v-col>
                <VTextField
                  label=""
                  suffix="W"
                  type="number"
                  density="compact"
                  variant="outlined"
                  bg-color="#faf9fe"
                />
              </v-col>

              <v-col>
                <VTextField
                  label=""
                  suffix="H"
                  type="number"
                  density="compact"
                  variant="outlined"
                  bg-color="#faf9fe"
                />
              </v-col>

              <v-col>
                <VTextField
                  label=""
                  suffix="D"
                  type="number"
                  density="compact"
                  variant="outlined"
                  bg-color="#faf9fe"
                />
              </v-col>
            </v-row>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
  <div class="add-products-actions" style="display: flex; justify-content: end">
    <VBtn class="" style="margin-right: 1rem" variant="text">Cancel</VBtn>
    <VBtn
      class=""
      style="margin-right: 1rem"
      variant="elevated"
      color="#733ee4"
    >
      <VIcon class="card-info-btn-icon" icon="mdi-plus" />
      Add Product
    </VBtn>
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

.card-info-btn {
  padding: 0;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #733ee4;
}
.card-info-input {
  height: 40px;
  background: #faf9fe;
}
.card-title {
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 0.7rem;
}
.card-info-list {
  border: none;
}
.card-type {
  padding: 1rem;
}
.v-btn--size-default {
  min-width: 37px;
}
.v-btn.v-btn--density-default {
  height: 40px;
}
.card-tags {
  padding: 1rem;
}

.card-file {
  height: 128px;
  border-radius: 8px;
  border: 1px transparent #e8e7ef;
  background: #faf9fe;
  position: relative;
  box-shadow: none;
}
.card-file-input {
  width: 96px;
  opacity: 0;
  height: 96px;
  position: absolute;
  top: 4rem;
  left: 4rem;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}
.card-file-ui {
  border-radius: 6px;
  height: 96px;
  width: 96px;
  border: 1px dashed var(--Purple, #733ee4);
  background: rgba(115, 62, 228, 0.05);
  position: absolute;
  top: 4rem;
  left: 4rem;
  transform: translate(-50%, -50%);
  box-shadow: none;
}
.card-file-text {
  color: #733ee4;
  font-family: Roboto;
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
