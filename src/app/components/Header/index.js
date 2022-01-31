import { Wrapper, Logo } from "./Header.style";
import Button from "../Button/Button.style";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../../auth";

export const Header = ({ usernameInput, passwordInput }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => auth.selectors.getToken(state));
  const focusInput = () => {
    usernameInput.length
      ? passwordInput?.current?.focus()
      : usernameInput?.current?.focus();
  };
  const logout = () => {
    dispatch(auth.actions.deleteTokenData());
    dispatch(auth.actions.deleteTokenError());
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
