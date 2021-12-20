import styled from "styled-components";

export const Button = styled.div`
  height: ${({ height }) =>
    (height === "s" && "30px") ||
    (height === "m" && "40px") ||
    (height === "l" && "40px") ||
    (height === "xl" && "40px") ||
    "40px"};
  width: ${({ width }) =>
    (width === "s" && "120px") ||
    (width === "m" && "130px") ||
    (width === "l" && "150px")};
  background-color: ${({ isSpecial }) =>
    isSpecial ? "var(--black)" : "var(--red)"};
  border: ${({ isSpecial }) => (isSpecial ? "1px solid var(--red)" : "none")};
  color: var(--grayLight);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
