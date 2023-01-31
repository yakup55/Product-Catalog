import axios from "axios";

class AuthenticationService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/authentication`;
  }
  async login(login) {
    const url = `${this.baseUrl}/login`;
    return await axios
      .post(url, login)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }
  async register(register) {
    const url = `${this.baseUrl}/register`;
    return await axios.post(url, register).then((resp) => resp.data);
  }
  async logOut() {
    const url = `${this.baseUrl}/logOut`;
    return await axios.post(url).then((resp) => resp.data);
  }
}
export default AuthenticationService;
