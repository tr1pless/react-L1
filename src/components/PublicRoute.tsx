import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "src/store/profile/selectors";

interface IPublicRoute {
  restricted?: boolean;
  children?: JSX.Element;
}
export const PublicRoute: FC<IPublicRoute> = ({
  restricted = true,
  children,
}) => {
  const isAuth = useSelector(selectAuth);
  if (isAuth && restricted) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
