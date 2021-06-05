import LoginPage from "./login.page";

export const ApplicationPath = "/login";

const AuthRoutes = [
  {
    path: [`${ApplicationPath}`],
    component: LoginPage,
    isAuthed: true,
  },
];

export default AuthRoutes;
