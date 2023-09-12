<template>
  <div class="container bg-red-500">
    {{ images }}
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useMainStore } from "~/store/mainStore";
export default defineComponent({
  name: "MainPage",
  setup() {
    const { getImages } = useMainStore();
    const { images } = storeToRefs(useMainStore());
    onMounted(async () => {
      await getImages();
    });
    return { images };
  },
});
</script>

<style scoped></style>
