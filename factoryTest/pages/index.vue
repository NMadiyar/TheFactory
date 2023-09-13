<template>
  <div>
    <div class="mt-10">
      <Images />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Images from "~/components/main/Images.vue";
export default defineComponent({
  name: "MainPage",
  components: { Images },
});
</script>

<style scoped></style>
