import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 3rem;
`;
export const Image = styled.div`
  grid-column: 1 / 2;
`;
export const Content = styled.div`
  grid-column: 2 / 3;
`;
