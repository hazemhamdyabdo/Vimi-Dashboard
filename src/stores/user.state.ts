import { defineStore } from 'pinia';
import logout from '@/apis/logout.ts';
import router from '@/router';

const user = JSON.parse(localStorage.getItem('user') || '{}');

export const useUserStore = defineStore('user', {
  state: () => ({
    userState: user ?? null,
  }),
  getters: {
    isLoggedIn(state): Boolean {
      return state.userState && !!Object.keys(state.userState).length;
    },
    userData(state): Object {
      return state.userState;
    },
  },
  actions: {
    updateUser(user: any) {
      localStorage.setItem('user', JSON.stringify(user));
      this.userState = user;
    },
    async onLogout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      await this.updateUser(null);
      router.push({ name: 'login' });
      await logout({});
    },
  },
});
