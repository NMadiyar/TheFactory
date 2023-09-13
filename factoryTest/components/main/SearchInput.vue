<template>
  <div class="bg-[url('/background.svg')] bg-no-repeat">
    <div class="container xl:container mx-auto xl:w-[1300px]">
      <form
          class="max-w-[866px] flex justify-center items-center m-auto h-[268px] px-3"
      >
        <input
            @input.prevent="searchForImage(searchWord)"
            class="shadow appearance-none h-[70px] border rounded w-full px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Поиск"
            v-model="searchWord"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useSearchInputComposable} from "~/composables/useSearchInputComposable";

export default defineComponent({
  name: "SearchInput",
  setup() {
    const {searchForImage, searchWord} = useSearchInputComposable()

    return {searchForImage, searchWord}
  }
});
</script>

<style scoped></style>
