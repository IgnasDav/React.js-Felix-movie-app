import { useState } from "react";
//Styles
import { Wrapper, Image, Content } from "../Card/Card.style";
//Components
import Button from "../Button/Button.style";
let favorites = [];

const Card = ({ img, title, description, id }) => {
  const DATA_KEY = "data";
  const [isFavorite, setIsFavorite] = useState(false);
  const saveData = () => {};
  const saveFavorites = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      favorites.push({ id });
    }
  };

  return (
    <Wrapper key={id}>
      <Image src={img} alt="movie poster"></Image>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        {isFavorite && (
          <Button
            isSpecial
            onClick={() => {
              saveFavorites();
              console.log(favorites);
            }}
          >
            <p>{isFavorite ? "Remove from ❤" : "Add to favorites"}</p>
          </Button>
        )}
        {!isFavorite && (
          <Button>
            <p>{isFavorite ? "Remove from ❤" : "Add to favorites"}</p>
          </Button>
        )}
      </Content>
    </Wrapper>
  );
};
export default Card;
