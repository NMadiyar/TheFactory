import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import * as vt from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast);
  return {
    provide: {
      toast: vt.useToast(),
    },
  };
});
