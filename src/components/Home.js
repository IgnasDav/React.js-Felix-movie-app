//Styles
//Components
import Banner from "./Banner";
import Grid from "./Grid";

const Home = ({ token, setToken }) => {
  console.log(token);
  return (
    <>
      {!token && <Banner />}
      <Grid token={token} setToken={setToken} />
    </>
  );
};
export default Home;
