<template>
  <div>
    <CardTransakiATK></CardTransakiATK>
  </div>
</template>

<script lang="ts">
import CardTransakiATK from "@/layouts/default-layout/components/hta/master/_CardPengajuanATK.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "master-laporan",
  components: {
    CardTransakiATK,
  },
});
</script>
