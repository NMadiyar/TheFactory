import { mainHttp } from "~/api/mainHttp";

export const images = {
  /**
   * GET: Images
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getImages: (params: object) =>
    mainHttp.get("/photos/random", { params: params }),
};
