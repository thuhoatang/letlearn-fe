import instance from "./httpReuest";

const courseService = {
  getAll: async (pageNumber = 1, pageSize = 6) => {
    const rourses = await instance.get("/course", {
      params: {
        pageNumber,
        pageSize,
      },
    });

    return rourses.data;
  },
};
export default courseService;
