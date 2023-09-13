import { mainHttp } from "~/api/mainHttp";

export const images = {
  /**
   * GET: Images
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getImages: (params: object) =>
    mainHttp.get("/photos/random", { params: params }),
  /**
   * GET: Search for image
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  searchForImages: (params:object) => mainHttp.get('/search/photos', {params: params}),
  /**
   * GET: certain image
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getCertainImage: (id:string | string[]) => mainHttp.get(`/photos/${id}`)
};
