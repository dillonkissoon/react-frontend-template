import LoginPage from "./login.page";

export const ApplicationPath = "/login";

const AuthRoutes = [
  {
    path: [`${ApplicationPath}`],
    component: LoginPage,
  },
];

export default AuthRoutes;
