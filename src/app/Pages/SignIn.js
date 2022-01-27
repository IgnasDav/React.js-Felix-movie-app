//Components
import LogIn from "../components/LogIn";
const SignIn = ({ passwordInput, usernameInput }) => {
  return (
    <>
      <LogIn passwordInput={passwordInput} usernameInput={usernameInput} />
    </>
  );
};
export default SignIn;
