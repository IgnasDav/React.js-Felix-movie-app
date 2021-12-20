import { Wrapper, Logo } from "./Header.style";
import { Button } from "../Button/Button.style";
import LogoImg from "../../images/logo.png";

export const Header = () => {
  return (
    <Wrapper>
      <Logo src={LogoImg} alt="Header Logo"></Logo>
      <Button height="m" width="s">
        <p>Sign In</p>
      </Button>
    </Wrapper>
  );
};
