import { Wrapper, Logo } from "./Header.style";
import Button from "../Button/Button.style";
import LogoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = ({ token, setToken }) => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoImg} alt="Header Logo"></Logo>
      </Link>
      {!token && (
        <Button to="/signin">
          <p>Sign In</p>
        </Button>
      )}
      {token && (
        <Button>
          <p>Logout</p>
        </Button>
      )}
    </Wrapper>
  );
};
