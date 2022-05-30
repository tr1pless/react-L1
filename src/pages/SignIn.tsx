import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeAuth } from "../store/profile/slice";

export const SignIn: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (login === "asd" && password === "123") {
      dispatch(changeAuth(true));
    } else {
      setPassword("");
      setLogin("");
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
          type="text"
          placeholder="asd"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="123"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        {error && <p style={{ color: "red" }}>Wrong username or password!a</p>}
        <button>Sign In</button>
      </form>
    </>
  );
};
