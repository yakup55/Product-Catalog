import axios from "axios";

class ColorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/colors`;
  }
  async getOneColor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getColorList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addColor(color) {
    return await axios.post(this.baseUrl, color).then((resp) => resp.data);
  }
  async deleteColor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateColor(id, color) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, color).then((resp) => resp.data);
  }
}
export default ColorService;
