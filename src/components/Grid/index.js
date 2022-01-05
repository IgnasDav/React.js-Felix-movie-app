import React from "react";
//Styles
import { Wrapper, Content } from "./Grid.styles";
//Components
import Card from "../Card";
import Spinner from "../Spinner";

//API
import apiSettings from "../../API";
import Button from "../Button/Button.style";
class Grid extends React.Component {
  state = {
    freeMovies: [],
    loading: false,
    error: false,
    movies: [],
  };
  async componentDidMount() {
    try {
      this.setState({ laoding: true });
      const freeMovies = await apiSettings.fetchFreeMovies();
      const movies = await apiSettings.fetchMovies(this.props.token);
      console.log(movies);
      this.setState({ movies, freeMovies, loading: false });
    } catch {
      this.setState({
        error: true,
      });
    }
  }
  render() {
    const { loading, freeMovies, movies } = this.state;

    return (
      <>
        {!this.props.token && (
          <Wrapper>
            <Content>
              {freeMovies?.map((movie, i) => (
                <Card
                  id={movie.id}
                  img={movie.image}
                  title={movie.title}
                  description={
                    movie.description.length > 150
                      ? movie.description.substring(0, 150)
                      : movie.description
                  }
                  key={movie.id}
                />
              ))}
            </Content>
            {loading ? (
              <Spinner />
            ) : (
              <Button>
                <p>Load More</p>
              </Button>
            )}
          </Wrapper>
        )}
        {this.props.token && (
          <Wrapper>
            <Content>
              {movies?.map((movie, i) => (
                <Card
                  id={movie.id}
                  img={movie.image}
                  title={movie.title}
                  description={
                    movie.description.length > 150
                      ? movie.description.substring(0, 150)
                      : movie.description
                  }
                  key={movie.id}
                />
              ))}
            </Content>
            {loading ? (
              <Spinner />
            ) : (
              <Button>
                <p>Load More</p>
              </Button>
            )}
          </Wrapper>
        )}
      </>
    );
  }
}
export default Grid;
