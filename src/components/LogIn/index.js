import { useState } from "react";
import apiSettings from "../../API";
import { useNavigate } from "react-router-dom";
//photo
import Show from "../../images/show.png";
//styles
import { Wrapper, Content } from "./LogIn.style";
//components
import Button from "../Button/Button.style";
const LogIn = ({ token, setToken }) => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <Wrapper>
      <Content>
        <form id="form">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            {!isActive && (
              <hr
                style={
                  token.message === "Bad credentials!"
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
                token.message === "Bad credentials!"
                  ? { top: "40%" }
                  : { top: "47%" }
              }
              onClick={() => {
                toggleClass();
                const password = document.getElementById("password");
                if (password.type === "password") {
                  password.type = "text";
                } else {
                  password.type = "password";
                }
              }}
            />
          </div>

          <Button
            signIn={async () => {
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              if ((username || password || (username && password)) !== "") {
                setError(false);
                const apiToken = await apiSettings.signIn(username, password);
                setToken(apiToken);
                if (token.token) {
                  navigate("/", { replace: true });
                }
              } else {
                setError(true);
              }
            }}
          >
            Sign In
          </Button>
          {!error && token.message === "Bad credentials!" && (
            <h1 className="error">{token.message}</h1>
          )}
          {error && <h1 className="error">Inputs are empty</h1>}
        </form>
      </Content>
    </Wrapper>
  );
};
export default LogIn;
