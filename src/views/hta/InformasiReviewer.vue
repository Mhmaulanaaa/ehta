<template>
  <div>
    <CardReviewer></CardReviewer>
  </div>
</template>

<script lang="ts">
import CardReviewer from "@/layouts/default-layout/components/hta/master/_CardReviewer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "informasi-reviewer",
  components: {
    CardReviewer,
  },
});
</script>
