import { ref } from "vue";
export function useHeaderComposable() {
  const show = ref(false);

  function showSearchComponent() {
    show.value = !show.value;
  }

  return { show, showSearchComponent };
}
