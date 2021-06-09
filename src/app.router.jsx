import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

// hooks
import { useAuth } from "./auth/login.hook";

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
  const { isUserAuthed } = useAuth();

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
              render={(props) => {
                if (isAuthed && !isUserAuthed)
                  return (
                    <Redirect
                      key={`route-redirect-${index}`}
                      to={{
                        pathname: "/login",
                        state: {
                          from: props.location,
                        },
                      }}
                    />
                  );
                return <Component {...props} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
