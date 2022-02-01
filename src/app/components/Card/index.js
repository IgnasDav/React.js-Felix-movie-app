import { Link } from "react-router-dom";
//Styles
import { Wrapper, Image, Content } from "../Card/Card.style";
//Components
import Button from "../Button/Button.style";
import { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";

const Card = ({ img, title, description, id }) => {
  const { setFavorites, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(id);
  const onClick = () => {
    setFavorites(id);
  };
  return (
    <Wrapper key={id}>
      <Link to={`/content/${id}`}>
        <Image src={img} alt="movie poster" />
      </Link>
      <Content>
        <Link to={`/content/${id}`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
        <Button isSpecial={isFavorite} onClick={onClick}>
          <p>{isFavorite ? "Remove from ❤" : "Add to favorites"}</p>
        </Button>
      </Content>
    </Wrapper>
  );
};

export default Card;
