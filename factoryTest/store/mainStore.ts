import { defineStore } from "pinia";
import api from "../api/api";

export const useMainStore = defineStore({
  id: "useMainStore",
  state: () => ({
    images: [],
    isLoading: true,
  }),
  actions: {
    async getImages() {
      const response = await api.images.getImages({ count: 8 });
      this.$patch({
        images: response.data,
      });
      return response;
    },
  },
});
