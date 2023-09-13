<template>
  <div class="container xl:container mx-auto xl:w-[1300px]">
    <h1 class="text-4xl text-center mt-3 font-bold mb-10">Избранное</h1>
    <div v-if="favourites.length > 0" class="flex flex-wrap md:gap-3">
      <div
        v-for="image in favourites"
        :key="image.id"
        class="md:w-[30%] w-full"
      >
        <button @click="$router.push(`/${image.id}`)" class="w-full">
          <img
            :src="image.urls?.small"
            :alt="image.alt_description"
            class="object-cover rounded h-[440px] w-full"
          />
        </button>
      </div>
    </div>
    <div v-else class="flex justify-center">Пока нет избранных фотографий</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCertainImageComposable } from "~/composables/useCertainImageComposable";

export default defineComponent({
  name: "favourites",
  setup() {
    const { favourites } = useCertainImageComposable();

    return { favourites };
  },
});
</script>

<style scoped></style>
