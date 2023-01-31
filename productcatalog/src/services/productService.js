import axios from "axios";

class ProductService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/products`;
  }
  async getOneProduct(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getProductList() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }
  async addProduct(product) {
    return await axios.post(this.baseUrl, product).then((resp) => resp.data);
  }
  async deleteProduct(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
  async updateProduct(id, product) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, product).then((resp) => resp.data);
  }
  async getOneProductDetail(id) {
    const url = `${this.baseUrl}/getoneproductwithdetail/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async brandIdList(id) {
    const url = `${this.baseUrl}/brandidlist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async categoryIdList(id) {
    const url = `${this.baseUrl}/categoryidlist/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerProductfalse(id) {
    const url = `${this.baseUrl}/offerproductfalse/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerProducttrue(id) {
    const url = `${this.baseUrl}/offerproducttrue/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerProductIsSoldFalse(id) {
    const url = `${this.baseUrl}/offerproductissoldfalse/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerProductIsSoldTrue(id) {
    const url = `${this.baseUrl}/offerproductissoldtrue/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async offerUser(id) {
    const url = `${this.baseUrl}/offeruser/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
}
export default ProductService;
