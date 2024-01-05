<template>
  <div>
    <CardPengaju></CardPengaju>
  </div>
</template>

<script lang="ts">
import CardPengaju from "@/layouts/default-layout/components/hta/master/_CardPengaju.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-pengaju",
  components: {
    CardPengaju,
  },
});
</script>
