import { useState } from "react";
//Styles
import { Wrapper, Image, Content } from "../Card/Card.style";
//Components
import Button from "../Button/Button.style";
let favorites = [];

const Card = ({ img, title, description, id }) => {
  const DATA_KEY = "data";
  const [isFavorite, setIsFavorite] = useState(false);
  const saveFavorites = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      favorites.push({ id });
    } else {
      favorites?.forEach((item, i) => {
        favorites.splice(i, 1);
      });
    }
  };

  return (
    <Wrapper key={id}>
      <Image src={img} alt="movie poster"></Image>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button
          addToFavorites={() => {
            console.log("hello");
            saveFavorites();
          }}
        >
          <p>{isFavorite ? "Remove from ❤" : "Add to favorites"}</p>
        </Button>
      </Content>
    </Wrapper>
  );
};
export default Card;
