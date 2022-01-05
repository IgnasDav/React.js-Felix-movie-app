import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--white);
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 20rem;
`;
export const Content = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  background-color: var(--grayDark);
  height: 22rem;
  position: relative;

  h3 {
    padding-bottom: 10px;
  }
  h3 + p {
    padding-bottom: 20px;
    height: 10rem;
    overflow: hidden;
  }
`;
