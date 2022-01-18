//Components
import LogIn from "../components/LogIn";
const SignIn = ({
  token,
  setToken,
  passwordInput,
  usernameInput,
  username,
  password,
  setPassword,
  setUsername,
}) => {
  return (
    <>
      <LogIn
        token={token}
        setToken={setToken}
        passwordInput={passwordInput}
        usernameInput={usernameInput}
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    </>
  );
};
export default SignIn;
