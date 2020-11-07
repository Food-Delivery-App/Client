import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomeLayout from "../../layouts/homeLayouts";


const ProtectedRouter = ({ component, ...rest }) => {
  let hasToken = JSON.parse(localStorage.getItem('auth'));
  let RenderComponents = component;
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null && hasToken !== undefined ? (
          <HomeLayout {...props} />
          //<RenderComponents />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

export default ProtectedRouter;
