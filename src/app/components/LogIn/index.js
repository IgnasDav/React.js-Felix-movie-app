import { useState } from "react";
import apiSettings from "../../../API";
import { useNavigate } from "react-router-dom";
//photo
import Show from "../../images/show.png";
//styles
import { Wrapper, Content } from "./LogIn.style";
//components
import Button from "../Button/Button.style";
const LogIn = ({
  token,
  setToken,
  username,
  password,
  setPassword,
  setUsername,
  usernameInput,
  passwordInput,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const showPassword = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  const focusInput = () => {
    !username ? usernameInput.current.focus() : passwordInput.current.focus();
  };
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const setUsernameValue = (e) => {
    setUsername(e.target.value);
  };
  const setPasswordValue = (e) => {
    setPassword(e.target.value);
  };
  const LogIn = async () => {
    if ((username && password) !== "") {
      setIsLoading(true);
      try {
        const apiToken = await apiSettings.signIn(username, password);
        setToken(apiToken.token);
        localStorage.setItem("token", apiToken.token);
        if (localStorage.getItem("token") !== "null") {
          navigate("/", { replace: true });
        }
      } catch {
        setError(true);
      }
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Content>
        <form id="form">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              onChange={setUsernameValue}
              ref={usernameInput}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInput}
              required
              type="password"
              id="password"
              name="password"
              onChange={setPasswordValue}
            />
            {!isActive && (
              <hr
                style={
                  token?.message === "Bad credentials!"
                    ? { top: "45%" }
                    : { top: "53%" }
                }
              />
            )}
            <img
              src={Show}
              alt="eye"
              className={"show-psw"}
              style={
                token?.message === "Bad credentials!"
                  ? { top: "40%" }
                  : { top: "47%" }
              }
              onClick={() => {
                toggleClass();
                showPassword();
              }}
            />
          </div>

          <Button
            onClick={() => {
              focusInput();
              LogIn();
            }}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
          {!error && token?.message === "Bad credentials!" && (
            <h1 className="error">{token?.message}</h1>
          )}
          {error && <h1 className="error">Inputs are empty</h1>}
        </form>
      </Content>
    </Wrapper>
  );
};
export default LogIn;
