import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import content from "../../../content";
import auth from "../../../auth";

//Styles
import { Wrapper, Content, Error } from "./MovieGrid.styles";
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
      {error && <Error>{error.message}</Error>}
      {!error && (
        <Wrapper>
          <Content>
            {movies?.map((movie, i) => (
              <Card
                id={movie.id}
                img={movie.image}
                title={movie.title}
                description={movie.description.substring(0, 100) + "..."}
                key={movie.id}
              />
            ))}
          </Content>
          {loading && <Spinner />})
          {!loading && (
            <Button to="/signin">
              <p>Load More</p>
            </Button>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default MovieGrid;
