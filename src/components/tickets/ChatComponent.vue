<script setup lang="ts"></script>

<template>
  <!-- // ! icon in left -->
  <!-- // ! to make it right remove flex-direction -->
  <section
    v-for="i in 6"
    :style="`
      display: flex;
      gap: 0.5rem;
      flex-direction: ${i % 2 === 0 ? 'row-reverse' : 'row'};
      margin-bottom: 2rem;
      `"
  >
    <VCard class="chat-container">
      <img
        src="@/assets/test-product.png"
        alt="Selected Image"
        style="max-width: 100px; height: inherit"
      />
      <p class="chat-container-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        optio libero deserunt aspernatur debitis saepe a, fuga blanditiis odio
        mollitia est, suscipit incidunt id iste! Magnam possimus repellat neque
        error. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        quaerat unde at ipsam provident! Reiciendis cum repudiandae consectetur
        dolorum quam praesentium sed illo, architecto laborum accusamus aliquid
        voluptates accusantium quidem.
      </p>
      <div style="display: flex; align-items: unset; gap: 0.5rem">
        <SvgIcon icon="event calendar" style="width: 16px; height: 16px" />
        <p class="chat-container-date">{{ new Date().toLocaleDateString() }}</p>
      </div>
    </VCard>
    <div style="display: flex; align-items: flex-end">
      <img src="@/assets/test-avatar.png" style="width: 25px" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.chat-container {
  box-shadow: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  background: #faf9fe;
  &-text {
    color: #7066a2;
    font-weight: 400;
  }
  &-date {
    color: #9089b2;
    font-weight: 400;
    font-size: 12px;
    font-weight: 400;
    margin-top: 2px;
  }
}
</style>
