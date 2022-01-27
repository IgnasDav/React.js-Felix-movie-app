import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import content from "../../content";
//Components
import MovieInfo from "../components/MovieInfo";
import Spinner from "../components/Spinner";

const SingleMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    content.selectors.getSingleMovie(state, id)
  );
  console.log(movie);
  const error = useSelector((state) => content.selectors.getMoviesError(state));
  const loading = useSelector((state) =>
    content.selectors.getMoviesLoading(state)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!movie) {
      dispatch(content.actions.getSingleMovie(id));
    }
  }, [dispatch, movie, id]);
  return (
    <>
      {error && <h1>{error}</h1>}
      {loading && <Spinner />}
      {movie && (
        <MovieInfo
          title={movie.title}
          img={movie.image}
          description={movie.description}
          id={movie.id}
          video={movie.video}
        />
      )}
    </>
  );
};

function mapStateToProps({ content }) {
  return {
    movies: content.movies.list,
  };
}
export default connect(mapStateToProps, null)(SingleMovie);
