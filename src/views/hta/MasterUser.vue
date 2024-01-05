<template>
  <div>
    <CardUser></CardUser>
  </div>
</template>

<script lang="ts">
import CardUser from "@/layouts/default-layout/components/hta/master/_Carduser.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "master-user",
  components: {
    CardUser,
  },
});
</script>
