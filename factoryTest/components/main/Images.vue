<template>
  <div class="container xl:container mx-auto xl:w-[1300px] p-3">
    <div class="flex flex-wrap md:gap-3 ">
      <div v-for="image in images" :key="image.id" class="md:w-[30%] w-full">
        <button @click="$router.push(`/${image.id}`)" class="w-full">
        <img :src="image.urls.small" :alt="image.alt_description" class="object-cover rounded h-[440px] w-full" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from "vue";
import { useImagesComposable } from "~/composables/useImagesComposable";

export default defineComponent({
  name: "Images",
  setup() {
    const { images, getImages } = useImagesComposable();
    onMounted(async () => {
      await getImages();
    });
    return { images };
  },
});
</script>

<style scoped></style>
