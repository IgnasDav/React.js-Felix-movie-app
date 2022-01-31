import { useSelector } from "react-redux";
import auth from "../../auth";
//Components
import Banner from "../components/Banner";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const token = useSelector((state) => auth.selectors.getToken(state));
  return (
    <>
      {!token && <Banner />}
      <MovieGrid />
    </>
  );
};
export default Home;
