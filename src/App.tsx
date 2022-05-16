import React, { FC, useState } from "react";
import { defaultContext, ThemeContext } from "./utils/ThemeContext";
import { Provider, useSelector } from "react-redux";
import { selectChats } from "./store/chats/selectors";
import { PersistGate } from "redux-persist/integration/react";
import "./App.scss";
import { AppRouter } from "./components/AppRouter";
import { persistor, store } from "./store";

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};
