<script setup lang="ts"></script>

<template>
  <header>
    <div class="logo">
      <span class="first">VI</span>
      <span class="second">MI</span>
    </div>
    <div class="header-bar">
      <div class="header-title">
        <img src="@/icons/Group 48096656.svg" />
        <h2 class="header-title-text">Products</h2>
      </div>
      <div class="header-account">
        <img src="@/icons/notifications.svg" />
        <div
          class="d-flex align-items-center justify-content-center"
          style="gap: 0.5rem"
        >
          <img src="@/assets/Rectangle 17941.png" />
          <div class="header-account-text">
            <p style="color: #afaacb; font-size: 12px; font-style: normal">
              Welcome!
            </p>
            <p
              style="
                color: #21094a;
                font-family: Roboto;
                font-size: 14px;
                font-family: Roboto;
                font-size: 14px;
                font-weight: 700;
              "
            >
              Amr Farouk
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
}
.logo {
  border: 1px solid #d4d5dc;
  border-right: none;
  min-width: 304px;
  height: 72px;
  padding-left: 1rem;
  padding-top: 0.5rem;
}
.first {
  color: #21094a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  font-family: "Montagu Slab", serif;
}
.second {
  color: #733ee4;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
  font-family: "Montagu Slab", serif;
}
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #d4d5dc;
  width: 100%;
  height: 72px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.header-title-text {
  color: #21094a;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}
.header-account {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.header-account-text {
  padding-top: 0.2rem;
}
</style>
