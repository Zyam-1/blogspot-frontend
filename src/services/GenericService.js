import axios from "axios";

axios.defaults.baseURL = "https://localhost:4000/api/";

class GenericService {
  constructor() {
    this.axios = axios;
  }

  get = (url) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: url,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  // id will come within the url
  post = (url, data) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: data,
        url: url,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  delete = (url) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: url,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  update = (url, data) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "PATCH",
        data: data,
        url: url,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default GenericService;
