import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//photo
import Show from "../../images/show.png";
//styles
import { Wrapper, Content } from "./LogIn.style";
//components
import Button from "../Button/Button.style";
import AuthContext from "../../context/AuthContext";
import apiSettings from "../../../API";
const LogIn = ({ usernameInput, passwordInput }) => {
  let navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, loading, setLoading, error, setError } =
    useContext(AuthContext);

  const showPassword = () => {
    if (passwordInput.current.type === "password") {
      passwordInput.current.type = "text";
    } else {
      passwordInput.current.type = "password";
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
      try {
        setLoading(true);
        const response = await apiSettings.signIn(username, password);
        setToken(response.token);
      } catch (e) {
        setError(e);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    if (token) navigate("/", { replace: true });
  }, [token, navigate]);

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
            {!isActive && <hr style={error && { top: "45%" }} />}
            <img
              src={Show}
              style={error && { top: "40%" }}
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
