import { Wrapper, Logo } from "./Header.style";
import Button from "../Button/Button.style";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../../auth";
import { useNavigate } from "react-router";

export const Header = ({ usernameInput, passwordInput }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => auth.selectors.getToken(state));
  const focusInput = () => {
    usernameInput.length
      ? passwordInput?.current?.focus()
      : usernameInput?.current?.focus();
  };
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(auth.actions.deleteToken);
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="Header Logo"></Logo>
      </Link>
      {!token && (
        <Button to="/signin" onClick={focusInput}>
          <p>Sign In</p>
        </Button>
      )}
      {token && (
        <Button onClick={logout}>
          <p>Logout</p>
        </Button>
      )}
    </Wrapper>
  );
};
