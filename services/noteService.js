import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const saveNotes = async (payload) => {
  try {
    const res = await axiosInstance.post("/api/notes", payload);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateNotes = async (id, payload) => {
  try {
    const res = await axiosInstance.put(`/api/notes/${id}`, payload);
    return res.data;
  } catch (err) {
    return err;
  }
};
