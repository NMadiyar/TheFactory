<template>
  <div class="bg-black">
    <div class="container xl:container mx-auto xl:w-[1300px] p-3">
      <div class="flex justify-between py-3">
        <nuxt-link to="/">
          <img src="/artGalery.svg" alt="art" />
        </nuxt-link>
        <div class="flex gap-10">
          <button
            v-if="!$route.params.id && $route.fullPath !== '/favourites'"
            @click="showSearchComponent"
            :class="
              show
                ? 'flex text-white justify-center items-center group target:searchImg target:searchText underline'
                : 'flex text-white justify-center items-center group target:searchImg target:searchText'
            "
          >
            <svg
              id="searchImg"
              class="group-hover:fill-amber-700 duration-200"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"
              />
            </svg>
            <span
              id="searchText"
              class="ml-3 group-hover:scale-110 duration-200 hidden md:inline"
              >Поиск</span
            >
          </button>
          <nuxt-link
            to="/favourites"
            class="flex text-white justify-center items-center group target:favourite target:favText my-link"
          >
            <svg
              id="favourite"
              class="group-hover:fill-red-800 duration-200 my-link"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0104 0C14.4592 0 12.3521 2.36963 11.5 3.488C10.6479 2.36963 8.54077 0 5.98957 0C2.68691 0 0 3.03645 0 6.76824C0 8.80424 0.808145 10.7017 2.22269 12.0002C2.24326 12.0358 2.26855 12.0686 2.29802 12.098L11.1617 20.9434C11.2553 21.0366 11.3774 21.0834 11.5 21.0834C11.6226 21.0834 11.7452 21.0366 11.8388 20.943L20.9972 11.7878L21.0918 11.6961C21.1666 11.6254 21.2406 11.5538 21.3234 11.4621C21.358 11.428 21.3865 11.3896 21.4086 11.3479C22.4357 10.0901 23 8.46777 23 6.76824C23 3.03645 20.3131 0 17.0104 0ZM20.6112 10.8089C20.5981 10.8243 20.5859 10.8407 20.5752 10.8575C20.5302 10.909 20.4811 10.9544 20.4324 11.0007L11.4996 19.9271L3.08465 11.529C3.05752 11.4757 3.0196 11.427 2.97329 11.3863C1.69252 10.2679 0.958318 8.58475 0.958318 6.76824C0.958318 3.56473 3.21519 0.958363 5.98957 0.958363C8.73263 0.958363 11.0737 4.53621 11.0971 4.57224C11.274 4.8455 11.726 4.8455 11.9029 4.57224C11.9263 4.53621 14.2674 0.958363 17.0104 0.958363C19.7848 0.958363 22.0417 3.56478 22.0417 6.76824C22.0417 8.2778 21.5335 9.71296 20.6112 10.8089Z"
              />
            </svg>
            <span
              class="ml-3 group-hover:scale-110 duration-200 hidden md:inline"
              id="favText"
              >Избранное</span
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <Transition>
    <SearchInput v-if="show"></SearchInput>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "~/components/main/SearchInput.vue";
import { useHeaderComposable } from "~/composables/useHeaderComposable";
export default defineComponent({
  name: "MainHeader",
  components: { SearchInput },
  setup() {
    const { show, showSearchComponent } = useHeaderComposable();
    return { show, showSearchComponent };
  },
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.my-link.router-link-active {
  @apply font-bold underline;
}
</style>
