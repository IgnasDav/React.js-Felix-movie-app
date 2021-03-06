import styled from "styled-components";
export const Error = styled.div`
  height: 80vh;
  padding-top: 10rem;
  text-align: center;
  color: var(--red);
  font-size: 5rem;
`;
export const Wrapper = styled.div`
  padding: 5rem 5.5rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.div`
  max-width: 112rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 5rem 10rem;
  padding-bottom: 7rem;
`;
