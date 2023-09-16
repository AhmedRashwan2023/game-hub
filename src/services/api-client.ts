import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9479b74514740af9424b38d9d24872e",
  },
});
