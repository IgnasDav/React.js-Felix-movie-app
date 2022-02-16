import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 3rem;
  color: var(--white);
  padding: 5rem;
  height: 75vh;
`;
export const Image = styled.img`
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div`
  grid-column: 2 / 3;
  h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;
