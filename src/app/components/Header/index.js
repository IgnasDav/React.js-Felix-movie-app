import { Wrapper, Logo } from "./Header.style";
import Button from "../Button/Button.style";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = ({
  token,
  setToken,
  usernameInput,
  passwordInput,
  username,
}) => {
  const storageToken = localStorage.getItem("token");
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const focusInput = () => {
    !username
      ? usernameInput?.current?.focus()
      : passwordInput?.current?.focus();
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="Header Logo"></Logo>
      </Link>
      {!storageToken && (
        <Button to="/signin" onClick={focusInput}>
          <p>Sign In</p>
        </Button>
      )}
      {storageToken && (
        <Button onClick={removeToken}>
          <p>Logout</p>
        </Button>
      )}
    </Wrapper>
  );
};
