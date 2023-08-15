import axios from "../lib/axios";

export const login = async (data) => {
  return await axios.post("/user/login", data);
};

export const signup = async (data) => {
  return await axios.post("/user/register", data);
};
