import axios from "axios";
const ROOT_URL = "http://localhost:8000";

export function apiCall(method, path, data){
  return new Promise((resolve, reject) => {
    return axios({
      method: method.toLowerCase(),
      url: `${ROOT_URL}${path}`,
      data: {...data}
    })
      .then(res => {
        return resolve(res.data)
      }).catch(err => {
        return reject(err.response.data.error);
      });
  })
}