import { defineStore } from "pinia";
import api from "../api/api";

export const useMainStore = defineStore({
  id: "useMainStore",
  state: () => ({
    images: [],
    certainImage: {},
    isLoaded: false,
    favourites: [],
  }),
  actions: {
    async getImages() {
      const response = await api.images.getImages({ count: 8 });
      this.$patch({
        images: response.data,
      });
      return response;
    },
    async searchForImage(word: string) {
      const response = await api.images.searchForImages({ query: word });
      this.$patch({
        images: response.data.results,
      });
    },
    async getCertainImage(id: string | string[]) {
      await api.images.getCertainImage(id).then((res) => {
        this.$patch({
          certainImage: res.data,
          isLoaded: true,
        });
      });
    },
  },
});
