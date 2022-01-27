import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../../../auth";
import { useNavigate } from "react-router-dom";
//photo
import Show from "../../images/show.png";
//styles
import { Wrapper, Content } from "./LogIn.style";
//components
import Button from "../Button/Button.style";
const LogIn = ({ usernameInput, passwordInput }) => {
  let navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => auth.selectors.getTokenLoading(state));
  const error = useSelector((state) => auth.selectors.getTokenError(state));
  const token = useSelector((state) => auth.selectors.getToken(state));

  const dispatch = useDispatch();

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
      dispatch(auth.actions.setToken(username, password));
      if (token) {
        navigate("/", { replace: true });
      }
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
            {!isActive && <hr />}
            <img
              src={Show}
              alt="eye"
              className={"show-psw"}
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
            {loading ? "Loading..." : "Sign In"}
          </Button>
          {error && <h1 className="error">{error}</h1>}
        </form>
      </Content>
    </Wrapper>
  );
};
export default LogIn;
