<template>
  <v-dialog persistent v-model="popupStore.popupModalGetter">
    <v-card
      style="border-radius: 16px; background: #fff"
      class="px-6 pt-2 pb-10 mx-auto"
      max-width="428px"
    >
      <v-card-title
        dense
        flat
        style="background-color: transparent"
        class="cursor-pointer d-flex justify-end pa-0 mt-4"
      >
        <v-icon size="24" color="#9089B2" @click="setPopupState">
          mdi-close
        </v-icon>
      </v-card-title>
      <v-card-text class="my-0 pa-0 text-center">
        <v-sheet
          height="64px"
          width="64px"
          :color="popupStore.popupModalOptionsGetter.sheetColor"
          class="rounded-lg d-flex mx-auto"
          style="border-radius: 16px"
        >
          <!-- <component
            :is="popupStore.popupModalOptionsGetter.icon"
            class="mx-auto my-auto"
            :color="'#EB5757'"
          /> -->
          <DeleteIcon
            v-if="popupStore.popupModalOptionsGetter.icon === 'deleteIcon'"
            class="mx-auto my-auto"
            :color="'#EB5757'"
          />
          <EditIcon
            v-if="popupStore.popupModalOptionsGetter.icon === 'editIcon'"
            class="mx-auto my-auto"
            :color="'#EB5757'"
          />
          <AddIcon
            v-if="popupStore.popupModalOptionsGetter.icon === 'AddIcon'"
            class="mx-auto my-auto"
            :color="'#733EE4'"
          />
        </v-sheet>
        <p
          class="mt-4"
          style="
            color: #21094a;
            text-align: center;
            font-family: Roboto;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          "
        >
          {{ popupStore.popupModalOptionsGetter.title }}
        </p>
        <p
          class="mt-2"
          style="
            color: #7066a2;
            text-align: center;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          "
        >
          {{ popupStore.popupModalOptionsGetter.text }}
        </p>
        <div
          class="mt-6"
          v-if="
            avaliableActions.includes(
              popupStore.popupModalOptionsGetter.buttonTitle
            )
          "
        >
          <p
            style="
              color: #afaacb;
              font-family: Roboto;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              text-align: left;
            "
            class="mb-2"
          >
            Sub-Category name
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
              placeholder="Enter sub-category name"
              class="my-auto px-4 pb-1 my-auto"
              variant="plain"
              density="compact"
              hide-details
              single-line
            />
          </v-card>
        </div>
      </v-card-text>
      <v-card-actions class="pt-0 px-0 actionsContainer mt-8">
        <v-spacer />
        <v-btn
          class="mx-2 mt-0"
          min-width="10.375rem"
          min-height="48"
          style="
            border-radius: 8px;
            border: 1px solid #21094a;
            background: #fff;
            color: #21094a;
          "
          @click="setPopupState"
        >
          <span class="tf"> Cancel </span>
        </v-btn>
        <v-btn
          class="mx-2 mt-0"
          min-width="10.375rem"
          min-height="48"
          :style="`border-radius: 8px; background: ${popupStore.popupModalOptionsGetter.buttonColor}; color: #fff`"
          @click="setPopupState"
        >
          <span class="tf">
            {{ popupStore.popupModalOptionsGetter.buttonTitle }}
          </span>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { usePopUpStore } from '@/stores/popup.state.ts';

const popupStore: any = usePopUpStore();

const avaliableActions = ['Add', 'Edit'];
const setPopupState = () => {
  popupStore.togglePopupState({
    state: false,
  });
};
</script>
