import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--white);
  a {
    text-decoration: none;
    color: var(--white);
    width: 100%;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 20rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  text-align: center;
  background-color: var(--grayDark);
  height: 22rem;
  position: relative;
`;
