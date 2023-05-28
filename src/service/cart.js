import instance from "./httpReuest";

const cartService = {
  get: async () => {
    const res = await instance.get("/cart");
    return res.data;
  },
  add: async (courseId) => {
    const res = await instance.post("/cart", { courseId: courseId });
    return res.data;
  },
  delete: async (courseId) => {
    const res = await instance.delete("/cart/" + courseId);
    return res.data;
  },
  getMycourses: async () => {
    const res = await instance.get("/cart/mycart");
    return res.data;
  },
};

export default cartService;
