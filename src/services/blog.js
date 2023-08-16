import axios from "../lib/axios";

export const getAllPost = async () => {
  return await axios.get("/blog/get");
};

export const getPostDetail = async (id) => {
  return await axios.get(`/blog/get/${id}`);
};

export const deletePost = async (id) => {
  x;
  return await axios.delete(`/blog/delete/${id}`);
};

export const updatePost = async (id) => {
  return await axios.put(`/blog/update/${id}`);
};

export const createPost = async (data) => {
  return await axios.post("/blog/create", data);
};
