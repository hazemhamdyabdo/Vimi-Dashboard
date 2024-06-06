import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const usePopUpStore = defineStore('popupModal', () => {
  const popupModalState = ref(false);
  const popupModalOptions = ref({});
  const popupModalGetter = computed(() => popupModalState.value);
  const popupModalOptionsGetter = computed(() => popupModalOptions.value);
  function togglePopupState({ state = false, options = {} }) {
    popupModalState.value = state;
    if (popupModalState) {
      popupModalOptions.value = options;
    } else {
      popupModalOptions.value = {};
    }
  }

  return { popupModalGetter, popupModalOptionsGetter, togglePopupState };
});
