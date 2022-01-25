import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import content from "../../../content";
//Styles
import { Wrapper, Image, Content } from "../Card/Card.style";
//Components
import Button from "../Button/Button.style";

const Card = ({ img, title, description, id }) => {
  const isFavorite = useSelector((state) =>
    content.selectors.isFavorite(state, id)
  );
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(content.actions.toggleFavorite(id));
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
