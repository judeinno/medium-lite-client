import axios from "axios";

const ApiClient = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(async (request) => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      request.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return request;
  });

  return instance;
};

export default ApiClient();
