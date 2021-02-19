import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'http://192.168.15.29:3333'
});

export async function signIn(data) {
    const request = await api.post("session", data);
    console.log(request.data.token)
    return request.data;
  }
export default api;