// import { useState, useEffect } from "react";

const loginUser = async ({ email, password, key }) => {
  try {
    if (!key && !email && !password)
      throw new Error("invalid request please pass email & password or key");

    if (key) return { key };
    return { email, password };
  } catch (error) {
    throw new Error(error.message);
  }
};

const useLogin = () => {
  return { loginUser };
};

export default useLogin;
