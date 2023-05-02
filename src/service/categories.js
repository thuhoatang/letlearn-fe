import instance from "./httpReuest";

const categoryService = {
  getAll: async () => {
    return await instance.get("category");
  },
};

export default categoryService;
