<template>
  <div>
    <CardLaporan></CardLaporan>
  </div>
</template>

<script lang="ts">
import CardLaporan from "@/layouts/default-layout/components/hta/master/_CardLaporan.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "master-laporan",
  components: {
    CardLaporan,
  },
});
</script>
