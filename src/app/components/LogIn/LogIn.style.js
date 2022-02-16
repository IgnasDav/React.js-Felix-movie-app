import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--grayDark);
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: var(--gray);
  padding: 6.1rem 6.6rem;
  border-radius: 1rem;

  .username {
    display: flex;
    flex-direction: column;
  }
  .password {
    display: flex;
    flex-direction: column;
    margin-top: 2.6rem;
    margin-bottom: 7rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  input {
    width: 54rem;
    height: 5rem;
    border-radius: 0.4rem;
    border: none;
    font-size: 1.8rem;
    background-color: var(--white);
  }
  label {
    font-size: 2.4rem;
  }
  .show-psw {
    position: absolute;
    top: 49%;
    right: 3%;
    cursor: pointer;
  }
  hr {
    position: absolute;
    width: 4.8rem;
    border: 1px solid #a19f80;
    top: 55%;
    right: 3%;
    transform: rotate(30deg);
  }
  .error {
    color: red;
  }
`;
