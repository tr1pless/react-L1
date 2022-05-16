import React, { FC, useState, useMemo, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { defaultContext, ThemeContext } from "./utils/ThemeContext";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ChatList } from "./components/ChatList";
import { useSelector } from "react-redux";
import { selectChats } from "./store/chats/selectors";
import "./App.scss";
import { AboutWithConnect } from "./pages/About";

const Chats = React.lazy(() =>
  import("./pages/Chats/Chats").then((module) => ({
    default: module.Chats,
  }))
);

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const chats = useSelector(selectChats);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Chats />} />
              </Route>
              <Route path="about" element={<AboutWithConnect />} />
            </Route>
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};
