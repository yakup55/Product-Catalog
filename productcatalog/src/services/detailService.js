import axios from "axios";

class DetailService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/details`;
  }
  async getDetailList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addDetail(detail) {
    return await axios.post(this.baseUrl, detail).then((resp) => resp.data);
  }
  async updateDetail(detail, id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, detail).then((resp) => resp.data);
  }
  async deleteDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async getOneDetail(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default DetailService;
