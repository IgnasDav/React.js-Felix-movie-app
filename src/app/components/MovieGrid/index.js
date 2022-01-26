import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import content from "../../../content";

//Styles
import { Wrapper, Content } from "./MovieGrid.styles";
//Components
import Card from "../Card";
import Spinner from "../Spinner";
import Button from "../Button/Button.style";
//API

const MovieGrid = () => {
  console.log("render");
  const dispatch = useDispatch();
  let movies = useSelector((state) => content.selectors.getMovies(state));
  const error = useSelector((state) => content.selectors.getMoviesError(state));
  const loading = useSelector((state) =>
    content.selectors.getMoviesLoading(state)
  );
  useEffect(() => {
    dispatch(content.actions.getMovies());
  }, [dispatch]);

  return (
    <>
      {error && <h1>404 Bad request</h1>}
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
