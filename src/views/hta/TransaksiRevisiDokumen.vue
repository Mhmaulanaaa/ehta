<template>
  <div>
    <CardTransaksiDokumen></CardTransaksiDokumen>
  </div>
</template>

<script lang="ts">
import CardTransaksiDokumen from "@/layouts/default-layout/components/hta/master/_CardRevisiDokumen.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "master-laporan",
  components: {
    CardTransaksiDokumen,
  },
});
</script>
