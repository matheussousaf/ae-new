import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { string } from "yup/lib/locale";

// Pode ser algum servidor executando localmente:
// http://localhost:3000

class BaseService {
  private api: AxiosInstance = {} as AxiosInstance;

  async authenticate(token?: String) {
    this.api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  create(url: string) {
    this.api = axios.create({
      baseURL: url,
    });
  }

  async get(url: string, config?: AxiosRequestConfig) {
    try {
      const request = await this.api.get(url, config);
      return request.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    try {
      const request = await this.api.post(url, data, config);
      return request.data;
    } catch (error) {
      console.log(error);
    }
  }

  async put() {}

  async delete() {}
}

export default BaseService;
