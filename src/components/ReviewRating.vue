<script setup lang="ts">
withDefaults(
  defineProps<{
    deleteIcon?: boolean;
    description: string;
    name: string;
    date: string | Date;
    title?: string;
    imgSrc?: string;
    numberOfRecords?: number;
  }>(),
  {
    deleteIcon: false,
    imgSrc: "../assets/avatar.png",
    numberOfRecords: 1,
  }
);
</script>
<template>
  <div>
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <section
      style="
        display: flex;
        gap: 2rem;
        align-items: center;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e8e7ef;
      "
      v-for="i in numberOfRecords"
    >
      <section style="display: flex; gap: 4rem">
        <div class="d-flex" style="gap: 0.7rem">
          <div>
            <img src="../assets/avatar.png" style="border-radius: 50%" />
          </div>
          <div style="white-space: nowrap">
            <h5>{{ name }}</h5>
            <p style="color: #afaacb; font-size: 12px">{{ date }}</p>
          </div>
        </div>
        <div>
          <div class="d-flex align-items-center">
            <VIcon
              icon="mdi-star"
              style="color: #ffa800"
              size="24"
              v-for="i in 4"
            />
            <VIcon icon="mdi-star-outline" style="color: #ffa800" size="24" />
          </div>
          <p style="color: #afaacb; font-size: 12px">
            {{ description }}
          </p>
        </div>
      </section>
      <div
        v-if="deleteIcon"
        style="cursor: pointer; margin-left: auto; padding-right: 0.5rem"
      >
        <VIcon icon="mdi-trash-can-outline" size="24" color="#afaacb" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.card-title {
  color: #21094a;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 0.7rem;
}
</style>
