import { ThemeContext } from "../utils/ThemeContext";
import React, { FC, useContext, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/slice";
import { selectName, selectVisible } from "../store/profile/selectors";

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);
  const [value, setValue] = useState("");

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === "light" ? "good morning" : "goodbye"}</p>
        <button onClick={toggleTheme}>change theme</button>
      </div>
      <hr />
      <div>
        <p>{name}</p>
        <input type="checkbox" checked={visible} />
        <button onClick={() => dispatch(toggleProfile())}>
          change visible
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
