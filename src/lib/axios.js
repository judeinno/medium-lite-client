import axios from "axios";

const ApiClient = () => {
  const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default ApiClient();
