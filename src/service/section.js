import instance from "./httpReuest";

const sectionService = {
  create: async (data) => {
    const response = await instance.post("section", data);
    return response.data;
  },
};

export default sectionService;
