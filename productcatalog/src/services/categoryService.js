import axios from "axios";

class CategoryService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/categories`;
  }
  async getOneCategory(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getCategoryList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addCategory(category) {
    return await axios.post(this.baseUrl, category).then((resp) => resp.data);
  }
  async deleteCategory(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateCategory(id, category) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, category).then((resp) => resp.data);
  }
}
export default CategoryService;
