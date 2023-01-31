import axios from "axios";

class BrandService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/brands`;
  }
  async getBrandList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async getOneBrand(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addBrand(brand){
    return await axios.post(this.baseUrl,brand).then((resp)=>resp.data)
  }
  async deleteBrand(id){
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp)=>resp.data)
  }
  async updateBrand(id,brand){
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url,brand).then((resp)=>resp.data)
  }
}
export default BrandService;
