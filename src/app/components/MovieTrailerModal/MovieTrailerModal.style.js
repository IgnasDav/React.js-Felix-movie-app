import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.86);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 70%;
  height: 70%;

  iframe {
    width: 100%;
    height: 100%;
  }
`;
