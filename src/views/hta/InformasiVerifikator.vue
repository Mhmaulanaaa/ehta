<template>
  <div>
    <CardVerifikator></CardVerifikator>
  </div>
</template>

<script lang="ts">
import CardVerifikator from "@/layouts/default-layout/components/hta/master/_CardVerifikator.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-verifikator",
  components: {
    CardVerifikator,
  },
});
</script>
