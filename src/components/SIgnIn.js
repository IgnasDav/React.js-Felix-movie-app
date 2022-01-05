//Components
import LogIn from "./LogIn";
const SignIn = ({ token, setToken }) => {
  return (
    <>
      <LogIn token={token} setToken={setToken} />
    </>
  );
};
export default SignIn;
