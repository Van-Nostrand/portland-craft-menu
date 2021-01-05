import axios from "axios";

export const useApi = async (address = 'api/') => {
  let menuData = await apiCall("get", address);
 
  return menuData;
}

export function apiCall(method, path, data){
  return new Promise((resolve, reject) => {
    return axios({
      method: method.toLowerCase(),
      url: path,
      data: {...data}
    })
      .then(res => {
        return resolve(res.data)
      }).catch(err => {
        return reject(err.response.data.error);
      });
  })
}