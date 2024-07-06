<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        :size="{ width, height: 420 }"
        :data="data"
        :margin="margin"
        :direction="direction"
        :axis="axis"
      >
        <template #layers>
          <Area
            :dataKeys="['name', 'pl']"
            type="monotone"
            :areaStyle="{ fill: 'url(#grad)' }"
          />
          <Line
            :dataKeys="['name', 'pl']"
            type="monotone"
            :lineStyle="{
              stroke: '#9f7aea',
            }"
          />
          <!-- <Marker
            v-if="marker"
            :value="1000"
            label="Mean."
            color="green"
            :strokeWidth="2"
            strokeDasharray="6 6"
          /> -->
          <defs>
            <linearGradient id="grad" gradientTransform="rotate(90)">
              <stop offset="0%" stop-color="#be90ff" stop-opacity="1" />
              <stop offset="100%" stop-color="white" stop-opacity="0.4" />
            </linearGradient>
          </defs>
        </template>

        <template #widgets>
          <Tooltip
            borderColor="#48CAE4"
            :config="{
              pl: { color: '#9f7aea' },
              avg: { hide: true },
              inc: { hide: true },
            }"
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  Chart,
  Grid,
  Line,
  Responsive,
  Area,
  Marker,
  Tooltip,
} from 'vue3-charts';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line, Responsive, Area, Marker, Tooltip },
  setup() {
    const data = ref([
      { name: 'Jan', pl: 0 },
      { name: 'Feb', pl: 4000 },
      { name: 'Mar', pl: 1000 },
      { name: 'Apr', pl: 4000 },
      { name: 'May', pl: 1000 },
      { name: 'Jun', pl: 5000 },
      { name: 'Jul', pl: 2000 },
      { name: 'Aug', pl: 4000 },
      { name: 'Sep', pl: 5000 },
      { name: 'Oct', pl: 3000 },
      { name: 'Nov', pl: 2000 },
      { name: 'Dec', pl: 6000 },
    ]);
    const direction: any = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    const axis: any = ref({
      primary: {
        type: 'band',
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8,
      },
    });

    return { data, direction, margin, axis };
  },
});
</script>
