import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  button,
  a {
    padding: 1rem 3rem;
    border: 1px solid var(--red);
    background-color: ${({ isSpecial }) =>
      isSpecial ? "var(--darkGray)" : "var(--red)"};
    color: var(--grayLight);
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    position: ${({ isAbsolute }) => (isAbsolute ? "absolute" : "relative")};
    bottom: ${({ isAbsolute }) => (isAbsolute ? "20px" : "0")};
    text-decoration: none;
    font-size: 1.8rem;

    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
const Button = ({
  children,
  isSpecial,
  isAbsolute,
  addToFavorites,
  to,
  signIn,
}) => {
  const Component = to ? Link : "button";
  return (
    <StyledButton isSpecial={isSpecial} isAbsolute={isAbsolute}>
      <Component to={to} type="button" onClick={(addToFavorites, signIn)}>
        {children}
      </Component>
    </StyledButton>
  );
};
export default Button;
