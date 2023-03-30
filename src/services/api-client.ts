import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6fecd2bdaf874fe0b0abf0b3d9a4f2e0'
  }
});