<template>
  <div>
    <CardViewer></CardViewer>
  </div>
</template>

<script lang="ts">
import CardViewer from "@/layouts/default-layout/components/hta/master/_CardViewer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-verifikator",
  components: {
    CardViewer,
  },
});
</script>
