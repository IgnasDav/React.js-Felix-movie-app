import { useContext } from "react";
//Components
import Banner from "../components/Banner";
import MovieGrid from "../components/MovieGrid";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { token } = useContext(AuthContext);
  return (
    <>
      {!token && <Banner />}
      <MovieGrid />
    </>
  );
};
export default Home;
