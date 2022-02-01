import { Wrapper, Logo } from "./Header.style";
import Button from "../Button/Button.style";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const Header = ({ usernameInput, passwordInput }) => {
  const { token, setToken } = useContext(AuthContext);

  const focusInput = () => {
    usernameInput.length
      ? passwordInput?.current?.focus()
      : usernameInput?.current?.focus();
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="Header Logo"></Logo>
      </Link>
      <Button to={!token && "/signin"} onClick={token ? logout : focusInput}>
        <p>{token ? "Logout" : "Sign In"}</p>
      </Button>
    </Wrapper>
  );
};
