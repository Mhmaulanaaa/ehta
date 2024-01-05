<template>
  <div>
    <CardKepalaVerifikator></CardKepalaVerifikator>
  </div>
</template>

<script lang="ts">
import CardKepalaVerifikator from "@/layouts/default-layout/components/hta/master/_CardKepalaVerifikator.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-verifikator",
  components: {
    CardKepalaVerifikator,
  },
});
</script>
