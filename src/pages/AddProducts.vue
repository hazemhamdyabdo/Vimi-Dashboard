<script setup lang="ts"></script>
<template>
  <section class="add-products" style="display: flex; gap: 1rem">
    <div>
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
              <img src="../icons/upload.svg" style="cursor: pointer" />
              <p class="card-file-text">Upload Image</p>
            </div>
          </VCard>
        </VCard>
      </VCard>
      <VCard class="card card-info">
        <h3 class="card-title">Main information</h3>
        <VRow disable-gutters style="gap: 1rem">
          <VCol>
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
            ></VTextField>
          </VCol>
          <VCol>
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
          <VCol>
            <h4 class="card-info-title">General info</h4>
            <VTextarea
              label=""
              placeholder="Write info"
              variant="outlined"
              rows="4"
              class="card-info-input"
              type="text-area"
              bg-color="#faf9fe"
              style="
                color: #afaacb;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
              "
            ></VTextarea>
          </VCol>
          <VCol class="mt-16">
            <h4 class="card-info-title">Suggested use</h4>
            <VTextarea
              label=""
              placeholder="Write suggested use"
              variant="outlined"
              rows="4"
              class="card-info-input"
              type="text-area"
              bg-color="#faf9fe"
              style="
                color: #afaacb;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
              "
            />
          </VCol>
          <v-row no-gutters class="px-3" style="margin-top: 5rem; gap: 1rem">
            <v-col>
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
            </v-col>
            <v-col>
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
            </v-col>
          </v-row>
        </VRow>
      </VCard>
      <VCard
        class="card card-Warehouse"
        style="margin-bottom: 1rem; margin-top: 2rem"
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
      <VCard
        class="card card-Warehouse"
        style="margin-bottom: 1rem; margin-top: 2rem"
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
        </VRow>
      </VCard>
    </div>
    <div>
      <VCard class="card card-type" style="margin-bottom: 2rem">
        <h3 class="card-title">Type</h3>
        <v-col cols="12">
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
        <VRow style="padding: 1rem">
          <VTextField
            label=""
            density="compact"
            placeholder="Write tag"
            variant="outlined"
            bg-color="#faf9fe"
            style="
              color: #afaacb;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              padding-right: 1rem;
            "
          />
          <VBtn class="card-info-btn" color="#21094a" variant="outlined">
            <VIcon icon="mdi-plus" color="#21094a"></VIcon>
          </VBtn>
          <VTextarea
            label=""
            placeholder="Write suggested use"
            variant="outlined"
            rows="4"
            type="text-area"
            bg-color="#faf9fe"
            style="color: #afaacb"
          />
        </VRow>
      </VCard>
      <VCard class="card card-tags" style="margin-bottom: 2rem">
        <h3 class="card-title mb-8">Visibility</h3>
        <div
          style="
            display: flex;
            width: 276px;
            height: fit-content;
            padding: 0px 12px;
            align-items: center;
            border-radius: 6px;
            background: rgba(115, 62, 228, 0.05);
          "
        >
          <v-radio-group inline hide-details>
            <v-radio
              label="Published"
              value="published"
              color="primary"
            ></v-radio>
            <v-radio label="Hidden" value="hidden" color="primary"></v-radio>
          </v-radio-group>
        </div>
      </VCard>
      <VCard class="card card-tags" style="margin-bottom: 2rem">
        <h3 class="card-title mb-8">Expiry date</h3>
        <VDatePicker label="Expiry date" />
      </VCard>
      <VCard class="card card-type" style="margin-bottom: 2rem">
        <h3 class="card-title">Brand</h3>
        <v-col cols="12">
          <v-select
            label=""
            density="compact"
            variant="outlined"
            bg-color="#faf9fe"
            placeholder="Choose brand"
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
      <VCard class="card card-type" style="margin-bottom: 2rem">
        <h3 class="card-title">Style</h3>
        <VCol cols="12" style="margin-left: -0.6rem; min-width: 106%">
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
        <v-row class="mb-6" no-gutters style="gap: 1rem">
          <v-col>
            <VTextField
              label=""
              suffix="W"
              type="number"
              density="compact"
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

          <v-col>
            <VTextField
              label=""
              suffix="H"
              type="number"
              density="compact"
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

          <v-col>
            <VTextField
              label=""
              suffix="D"
              type="number"
              density="compact"
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
        </v-row>
      </VCard>
    </div>
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
  width: 704px;
  border-radius: 12px;
  padding: 1rem 2rem;
}
.card-info {
  /* width: 704px; */
  height: auto;
}
.card-info-btn {
  padding: 0;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #733ee4;
}
.card-info-input {
  width: 640px;
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
  width: 340px;
  padding: 1rem;
}
.v-btn--size-default {
  min-width: 37px;
}
.v-btn.v-btn--density-default {
  height: 40px;
}
.card-tags {
  width: 340px;
  padding: 1rem;
}

.card-file {
  width: 640px;
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
