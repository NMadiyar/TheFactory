import { useMainStore } from "~/store/mainStore";
import { storeToRefs } from "pinia";

export function useCertainImageComposable() {
  const store = useMainStore();
  const { isLoaded, favourites, certainImage } = storeToRefs(useMainStore());
  const { getCertainImage } = useMainStore();
  const { $toast } = useNuxtApp();
  function addToFavourites() {
    favourites.value.push(certainImage.value);
    $toast.success("Данная картинка была успешна добавлена в избранные", {
      timeout: 2000,
    });
  }
  return {
    getCertainImage,
    certainImage,
    addToFavourites,
    store,
    isLoaded,
    favourites,
  };
}
