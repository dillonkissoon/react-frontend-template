import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import routes
import AuthRoutes from "./auth/auth.routes";
import MemberRoutes from "./members/members.routes";

// components
import HomePage from "./pages/home.page";

// add routes to be available to the application
const ApplicationRoutes = [
  {
    path: ["/", "/home"],
    component: HomePage,
  },
  ...AuthRoutes,
  ...MemberRoutes,
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {ApplicationRoutes.map((route, index) => {
          const { path, component: Component, isAuthed } = route;
          return (
            <Route
              key={`route-${index}`}
              path={path}
              exact
              render={(props) => <Component {...props} />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
