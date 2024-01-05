<template>
  <div>
    <CardDokumenVerifikator></CardDokumenVerifikator>
  </div>
</template>

<script lang="ts">
import CardDokumenVerifikator from "@/layouts/default-layout/components/hta/master/_CardDokumenVerifikator.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-dokumen-verifikator",
  components: {
    CardDokumenVerifikator,
  },
});
</script>
