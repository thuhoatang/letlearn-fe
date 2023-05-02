import instance from "./httpReuest";

const auth = {
  signIn: async (data) => {
    return await instance.post("auth/login", {
      ...data,
    });
  },
  signUp: (data) => {
    instance.post("account", {
      ...data,
    });
  },
};

export default auth;
