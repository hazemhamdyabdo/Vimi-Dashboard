<template>
  <div class="d-flex justify-space-between w-100">
    <p class="my-auto text-9089B2">
      <slot name="label" />
    </p>
    <div class="pagination">
      <slot name="paginations" />
    </div>
  </div>
</template>

<style>
.bg-f4f3f9 {
  background: #f4f3f9;
}

.text-9089B2 {
  color: #9089b2;
}

.v-pagination .v-pagination__list .v-pagination__item--is-active {
  color: #fff;
  background-color: #733ee4;
  border-radius: 8px;
}
.v-pagination .v-pagination__list li button {
  max-height: 34px;
  max-width: 34px;
}
</style>
