<template>
  <v-container style="height: 100vh" class="d-flex">
    <v-layout class="my-auto d-block">
      <v-flex class="text-center">
        <p>
          <span class="text-h4 font-weight-bold text-21094A">VI</span>
          <span class="text-h4 font-weight-light text-733ee4">MI</span>
        </p>
        <p>
          <span class="text-7066A2 text-h6 d-flex justify-center mt-2">
            <p class="me-3">We are happy to see you.</p>
            <img class="my-auto" src="@/assets/svgs/Bitmap.svg" />
          </span>
        </p>
      </v-flex>
      <form>
        <v-card
          class="pa-12 elevation-2 mx-auto my-6 rounded-lg"
          width="33.75rem"
        >
          <v-card-text class="pa-0">
            <p class="mb-2">Email</p>
            <v-card
              flat
              bg-color="#fff"
              class="mx-auto border-sm rounded-lg mb-4 d-flex"
              height="48"
            >
              <v-text-field
                class="my-auto px-4 pb-1 my-auto"
                variant="plain"
                density="compact"
                hide-details
                single-line
                v-model="state.email"
                :error-messages="v$.email.$errors.map((e) => e.$message)"
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
            <p class="mb-2">password</p>
            <v-card
              flat
              bg-color="#fff"
              class="mx-auto border-sm rounded-lg d-flex"
              height="48"
            >
              <v-text-field
                class="my-auto px-4 pb-1 my-auto"
                variant="plain"
                :type="showPass ? 'text' : 'password'"
                density="compact"
                hide-details
                single-line
                v-model="state.password"
                :error-messages="v$.password.$errors.map((e) => e.$message)"
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
            <v-sheet color="#733EE4" class="w-100 rounded-lg mt-10 pa-2">
              <v-btn @click="handleLogion" elevated class="w-100" color="#fff">
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

const initialState = {
  email: '',
  password: '',
};

const state: any = reactive({
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

const handleLogion = async () => {
  const isVaid = await v$.value.$validate();
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
* {
  font-family: Montagu Slab;
}
</style>
