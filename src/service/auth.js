import instance from "./httpReuest";

const auth = {
  signIn: async (data) => {
    return await instance
      .post("auth/login", {
        ...data,
      })
      .then((res) => res)
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  },
  signUp: (data) => {
    instance.post("account", {
      ...data,
    });
  },

  getMe: async () => {
    return await instance.get("auth/profile");
  },
};

export default auth;
