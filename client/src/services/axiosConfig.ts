import axios from "axios";

function ApiUrl(build: string) {
  switch (build) {
    case "prod":
      return "";
    default:
      return "http://localhost:5000";
  }
}

const axiosInstance = axios.create({
  baseURL: ApiUrl(import.meta.env.VITE_BUILD_FLAVOUR),
  // withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // },
  // timeout: 20,
});

export default axiosInstance;
