<template>
  <div>
    <CardTransakiObat></CardTransakiObat>
  </div>
</template>

<script lang="ts">
import CardTransakiObat from "@/layouts/default-layout/components/hta/master/_CardPengajuanObat.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "master-laporan",
  components: {
    CardTransakiObat,
  },
});
</script>
