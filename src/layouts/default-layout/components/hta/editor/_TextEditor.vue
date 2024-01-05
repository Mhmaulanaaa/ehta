<template>
  <label for="">{{ label }}</label>
  <Editor
    apiKey="ktu1mpe12zfnohqoq3fm63rfq917q3euky0e3x7ch15q7ql1"
    initialValue="<p>Initial editor content</p>"
    :init="{
      height: 500,
      menubar: false,
      plugins: [
        `advlist autolink lists link image charmap`,
        `searchreplace visualblocks code fullscreen`,
        `print preview anchor insertdatetime media`,
        `paste code help wordcount table`,
      ],
      toolbar: `undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Editor from "@tinymce/tinymce-vue";

export default defineComponent({
  name: "editors-tinymce",
  components: {
    Editor,
  },
  props: {
    initial: String,
    label: String,
  },
});
</script>
