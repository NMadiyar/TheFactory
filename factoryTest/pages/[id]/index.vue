<template>
  <div v-if="isLoaded">
    <img
      :src="certainImage.urls?.raw"
      :alt="certainImage.alt_description"
      class="grayscale w-full absolute -z-50 h-[70%]"
    />
    <div class="container xl:container mx-auto xl:w-[1300px] p-3">
      <div class="flex justify-between">
        <div class="flex">
          <img
            :src="certainImage.user?.profile_image?.small"
            alt="user"
            height="55"
            width="55"
            class="rounded-[50%] border-white border-2"
          />
          <div class="text-[18px] text-white ml-2">
            <p>
              {{ certainImage.user?.first_name }}
              <span class="ml-1">{{ certainImage.user?.last_name }}</span>
            </p>
            <p>@{{ certainImage.user?.instagram_username }}</p>
          </div>
        </div>
        <button class="group target:blackHeart" @click="addToFavourites">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_11_271)">
              <rect
                x="4.93164"
                y="4.93164"
                width="49.0684"
                height="49.0684"
                rx="8"
                fill="white"
              />
            </g>
            <path
              id="blackHeart"
              class="group-hover:fill-amber-700 duration-200"
              d="M34.652 18.1184C31.9926 18.1184 29.7961 20.5886 28.9078 21.7544C28.0195 20.5886 25.823 18.1184 23.1636 18.1184C19.7208 18.1184 16.9199 21.2837 16.9199 25.1738C16.9199 27.2962 17.7624 29.2741 19.2369 30.6278C19.2584 30.6648 19.2847 30.699 19.3154 30.7297L28.5551 39.9503C28.6527 40.0474 28.78 40.0962 28.9078 40.0962C29.0356 40.0962 29.1634 40.0474 29.261 39.9499L38.808 30.4063L38.9065 30.3107C38.9846 30.237 39.0616 30.1624 39.1479 30.0668C39.184 30.0312 39.2138 29.9912 39.2367 29.9478C40.3074 28.6366 40.8957 26.9454 40.8957 25.1738C40.8957 21.2837 38.0948 18.1184 34.652 18.1184ZM38.4055 29.3858C38.3919 29.402 38.3792 29.419 38.368 29.4366C38.3211 29.4902 38.2699 29.5375 38.2192 29.5858L28.9073 38.8909L20.1354 30.1365C20.1072 30.0809 20.0676 30.0302 20.0194 29.9878C18.6842 28.8219 17.9189 27.0674 17.9189 25.1738C17.9189 21.8344 20.2715 19.1174 23.1636 19.1174C26.023 19.1174 28.4634 22.8471 28.4878 22.8846C28.6722 23.1695 29.1434 23.1695 29.3278 22.8846C29.3522 22.8471 31.7926 19.1174 34.652 19.1174C37.5441 19.1174 39.8967 21.8344 39.8967 25.1738C39.8967 26.7474 39.3669 28.2434 38.4055 29.3858Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_11_271"
                x="0.931641"
                y="0.931641"
                width="57.0684"
                height="57.0684"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_11_271"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_11_271"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
      <div class="flex w-full mt-10">
        <img
          :src="certainImage.urls?.raw"
          :alt="certainImage.alt_description"
          class="object-cover md:max-h-[744px] w-full rounded"
        />
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center m-10">
    <span class="loader"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useCertainImageComposable } from "~/composables/useCertainImageComposable";

export default defineComponent({
  name: "imagePage",
  setup() {
    let {
      certainImage,
      getCertainImage,
      addToFavourites,
      store,
      isLoaded,
      favourites,
    } = useCertainImageComposable();
    const route = useRoute();

    onMounted(async () => {
      await getCertainImage(route.params.id);
    });
    onUnmounted(() => {
      certainImage.value = {};
      isLoaded.value = false;
    });
    return { certainImage, addToFavourites, isLoaded, favourites };
  },
});
</script>

<style>
@import "/assets/css/loader.css";
</style>
