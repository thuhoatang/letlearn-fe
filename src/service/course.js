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
  create: async (data) => {
    const rourses = await instance.post(
      "/course",
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return rourses.data;
  },
  courseOwner: async () => {
    const rourses = await instance.get("course/owner");

    return rourses.data;
  },
};
export default courseService;
