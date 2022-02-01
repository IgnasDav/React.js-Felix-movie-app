import { useContext } from "react";

import FavoritesContext from "../../context/FavoritesContext";
//Styles
import Button from "../Button/Button.style";
import { Wrapper, Content, Image, Buttons } from "./MovieInfo.style";

const MovieInfo = ({ title, img, description, id }) => {
  const { setFavorites, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(id);
  const onClick = () => {
    setFavorites(id);
  };
  return (
    <Wrapper>
      <Image src={img} alt="Movie image" />
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <Buttons>
          <Button>Watch Video</Button>
          <Button onClick={onClick} isSpecial={isFavorite}>
            {isFavorite ? "Remove from ❤" : "Add To Favorites"}
          </Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
