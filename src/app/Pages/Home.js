//Styles
//Components
import Banner from "../components/Banner";
import MovieGrid from "../components/MovieGrid";

const Home = ({ token, setToken }) => {
  return (
    <>
      {!localStorage.getItem("token") && <Banner />}
      <MovieGrid token={token} setToken={setToken} />
    </>
  );
};
export default Home;
