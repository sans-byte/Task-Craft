const { axiosInstance } = require("@services");

export const createFolder = async (payload) => {
  try {
    const res = await axiosInstance.post("/api/notes/folder", payload);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchFolders = async () => {
  try {
    const res = await axiosInstance.get("/api/notes/folder");
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateFolder = async (payload) => {
  try {
    const res = await axiosInstance.put("/api/notes/folder", payload);
    return res.data;
  } catch (error) {
    return error;
  }
};
