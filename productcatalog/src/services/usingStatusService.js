import axios from "axios";

class UsingStatusService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/usingstatuses`;
  }
  async getOneUsingStatus(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getUsingStatusList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addUsingStatus(using) {
    return await axios.post(this.baseUrl, using).then((resp) => resp.data);
  }
  async updateUsingStatus(id, using) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, using).then((resp) => resp.data);
  }
  async deleteUsingStatus(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default UsingStatusService;
