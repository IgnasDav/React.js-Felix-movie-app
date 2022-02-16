import styled from "styled-components";
import Hero from "../../images/HeroImage.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  animation: load 0.8s linear;
  background: url(${Hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 490px;
  @keyframes load {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  hr {
    height: 10px;
    width: 100%;
    background-color: var(--grayDark);
    position: absolute;
    top: 100%;
    outline: none;
    border: none;
  }
  h1 {
    color: var(--grayLight);
    padding: 3rem;
  }
`;
