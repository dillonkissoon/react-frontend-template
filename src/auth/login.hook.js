import { useState, createContext, useContext } from "react";

const storageKey = "credentails";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export function ProvideAuth({ children }) {
  const auth = useLogin();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// mock data for login
const users = [
  {
    email: "dillon@test.com",
    password: "testing",
  },
];

const isAuthed = () => {
  const creds = localStorage.getItem(storageKey);
  return creds !== null;
};

const doLogout = async () => {
  try {
    localStorage.removeItem(storageKey);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

const doLogin = async ({ email, password, key }) => {
  try {
    if (!key && !email && !password)
      throw new Error("invalid request please pass email & password or key");

    if (key) {
      // TODO: login logic with key
      return { key };
    }

    const user = users.find((user) => user.email === email);
    if (!user || (user && user.password !== password))
      throw new Error("invalid username or password");

    localStorage.setItem(storageKey, JSON.stringify({ email }));

    return { email };
  } catch (error) {
    throw new Error(error.message);
  }
};

const useLogin = () => {
  const [isUserAuthed, setIsUserAuthed] = useState(isAuthed());

  const loginUser = async (credentials) => {
    try {
      await doLogin(credentials);
      setIsUserAuthed(isAuthed());
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logoutUser = () => {
    doLogout();
    setIsUserAuthed(isAuthed());
  };

  return { loginUser, logoutUser, isUserAuthed, checkAuthStatus: isAuthed };
};

export default useLogin;
