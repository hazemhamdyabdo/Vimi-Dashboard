<template>
  <v-container style="height: 100vh" class="d-flex">
    <v-layout class="my-auto d-block">
      <v-flex class="text-center">
        <div class="d-flex justify-center">
          <p
            class="font-weight-bold text-21094A"
            style="
              color: #21094a;
              font-family: 'Montagu Slab';
              font-size: 40px;
              font-style: normal;
              font-weight: 700;
              line-height: 48px;
            "
          >
            VI
          </p>
          <p
            class="font-weight-light text-733ee4"
            style="
              color: #733ee4;
              font-family: 'Montagu Slab';
              font-size: 40px;
              font-style: normal;
              font-weight: 300;
              line-height: 48px;
            "
          >
            MI
          </p>
        </div>
        <span class="text-7066A2 text-h6 d-flex justify-center">
          <p
            class="me-1"
            style="
              font-family: Roboto;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            "
          >
            We are happy to see you.
          </p>
          <img src="@/assets/svgs/Bitmap.png" />
        </span>
      </v-flex>
      <form>
        <v-card
          class="pa-12 mx-auto my-6"
          width="33.75rem"
          style="
            border-radius: 16px;
            background: var(--White, #fff);
            box-shadow: 0px 4px 24px 0px rgba(35, 0, 110, 0.04);
          "
        >
          <p v-if="errorMsg.length">{{ errorMsg }}</p>
          <v-card-text class="pa-0">
            <p
              class="mb-2"
              style="
                color: #21094a;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
              "
            >
              Email
            </p>
            <v-card
              flat
              class="mx-auto border-sm rounded-lg mb-4 d-flex"
              height="48"
              style="
                border-radius: 8px;
                border: 1px solid #e8e7ef;
                background: #faf9fe;
              "
            >
              <v-text-field
                style="
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%; /* 24px */
                "
                class="my-auto px-4 pb-1 my-auto"
                variant="plain"
                density="compact"
                hide-details
                single-line
                v-model="state.email"
                :error-messages="
                  v$.email.$errors.map((e) => e.$message).join(', ')
                "
                :disabled="loadingBtn"
                @blur="v$.email.$touch"
                @input="v$.email.$touch"
              >
                <template v-slot:prepend-inner>
                  <img src="@/assets/svgs/mail.svg" />
                </template>
                <template v-slot:label>
                  <p class="body-2">Enter email</p>
                </template>
              </v-text-field>
            </v-card>
            <p
              class="mb-2"
              style="
                color: #21094a;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
              "
            >
              password
            </p>
            <v-card
              flat
              class="mx-auto border-sm rounded-lg d-flex"
              height="48"
              style="
                border-radius: 8px;
                border: 1px solid #e8e7ef;
                background: #faf9fe;
              "
            >
              <v-text-field
                style="
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%; /* 24px */
                "
                class="my-auto px-4 pb-1 my-auto"
                variant="plain"
                :type="showPass ? 'text' : 'password'"
                density="compact"
                hide-details
                single-line
                v-model="state.password"
                :error-messages="
                  v$.password.$errors.map((e) => e.$message).join(', ')
                "
                :disabled="loadingBtn"
                @blur="v$.password.$touch"
                @input="v$.password.$touch"
              >
                <template v-slot:prepend-inner>
                  <img src="@/assets/svgs/lock.svg" />
                </template>
                <template v-slot:append-inner>
                  <img
                    class="cursor-pointer"
                    @click="showPass = !showPass"
                    src="@/assets/svgs/eye.svg"
                  />
                </template>
                <template v-slot:label>
                  <p class="body-2">Enter Password</p>
                </template>
              </v-text-field>
            </v-card>
          </v-card-text>
          <v-card-actions class="pa-0">
            <v-sheet color="#733EE4" class="w-100 rounded-lg mt-10">
              <v-btn
                @click="handleLogion"
                elevated
                :loading="loadingBtn"
                class="w-100 text-capitalize"
                color="#fff"
                height="48"
              >
                Login
              </v-btn>
            </v-sheet>
          </v-card-actions>
        </v-card>
      </form>
    </v-layout>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import login from '@/apis/login.ts';
import getUserData from '@/apis/user.ts';
import { useUserStore } from '@/stores/user.state.js';

// Pinia Store
const userStore = useUserStore();

let initialState = {
  email: '',
  password: '',
};

let state: any = reactive({
  ...initialState,
});

const rules = { email: { required, email }, password: { required } };

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

let loadingBtn = ref(false);
const router = useRouter();

let errorMsg = ref('');
const handleLogion = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    errorMsg.value = '';
    loadingBtn.value = true;
    try {
      const { data } = await login({
        email: state.email,
        password: state.password,
      });
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
      fetchUserData(accessToken, refreshToken);
    } catch (e) {
      errorMsg.value = 'Please check your credentials and try again';
      loadingBtn.value = false;
    }
  }
};

const fetchUserData = async (accessToken: String, refreshToken: String) => {
  try {
    const { data } = await getUserData();
    userStore.updateUser({ ...data, accessToken, refreshToken });
    clear();
    loadingBtn.value = false;
    router.push({ name: 'products' });
  } catch {}
};

let showPass = ref(false);
</script>

<style scoped>
.text-21094A {
  color: #21094a;
}
.text-733ee4 {
  color: #733ee4;
}
.text-7066A2 {
  color: #7066a2;
}
</style>
