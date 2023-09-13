import { storeToRefs } from "pinia";
import { useMainStore } from "~/store/mainStore";
export function useImagesComposable() {
  const { getImages } = useMainStore();
  const { images } = storeToRefs(useMainStore());
  return { images, getImages };
}
