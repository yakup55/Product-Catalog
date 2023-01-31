import axios from "axios";

class OfferService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/offers`;
  }
  async getOneOffer(id) {
    var url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getOfferList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addOffer(offer) {
    return await axios.post(this.baseUrl, offer).then((resp) => resp.data);
  }
  async updateOffer(id, offer) {
    var url = `${this.baseUrl}/${id}`;
    return await axios.put(url, offer).then((resp) => resp.data);
  }
  async deleteOffer(id) {
    var url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async offerProduct(id) {
    const url = `${this.baseUrl}/offerproduct/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerDetailList(id) {
    const url = `${this.baseUrl}/offerlist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default OfferService;
