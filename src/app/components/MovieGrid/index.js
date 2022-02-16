import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import content from "../../../content";
import auth from "../../../auth";
//Components
import Card from "../Card";
import Spinner from "../Spinner";
import Button from "../Button/Button.style";
//API

const MovieGrid = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => content.selectors.getMovies(state));
  const token = useSelector((state) => auth.selectors.getToken(state));
  const error = useSelector((state) => content.selectors.getMoviesError(state));
  const loading = useSelector((state) =>
    content.selectors.getMoviesLoading(state)
  );
  useEffect(() => {
    if (token || !token) {
      dispatch(content.actions.getMovies());
    }
  }, [dispatch, token]);

  return (
    <>
      {error && <div text-red-500>{error.message}</div>}
      {!error && (
        <div className="flex flex-col items-center justify-center px-20 py-20 font-sans">
          <div className="grid max-w-screen-xl grid-cols-3 grid-cols-1 gap-y-20 gap-x-40 pb-20 md:grid-cols-2 lg:grid-cols-3">
            {movies?.map((movie, i) => (
              <Card
                id={movie.id}
                img={movie.image}
                title={movie.title}
                description={movie.description.substring(0, 70) + "..."}
                key={movie.id}
              />
            ))}
          </div>
          {loading && <Spinner />}
          {!loading && (
            <Button to="/signin">
              <p>Load More</p>
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default MovieGrid;
