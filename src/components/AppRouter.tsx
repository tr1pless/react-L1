import React, { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutWithConnect } from "../pages/About";
import { Articles } from "../pages/Articles";
import { Chats } from "../pages/Chats/Chats";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
// import { Profile } from "../pages/Profile";
import { ChatList } from "./ChatList";
import { Header } from "./Header";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const Profile = React.lazy(() =>
  Promise.all([
    import("../pages/Profile").then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="chats">
            <Route
              index
              element={
                <PrivateRoute>
                  <ChatList />
                </PrivateRoute>
              }
            />
            <Route
              path=":chatId"
              element={
                <PrivateRoute>
                  <Chats />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="about" element={<AboutWithConnect />} />
          <Route path="articles" element={<Articles />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
