//Styles
import Button from "../Button/Button.style";
import { Wrapper, Content, Image } from "./MovieInfo.style";

const MovieInfo = ({ title, img, description, id, video, isFavorite }) => {
  return (
    <Wrapper>
      <Image src={img} alt="Movie image" />
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button>Watch Video</Button>
        <Button>{isFavorite ? "Remove from ❤" : "Add To Favorites"}</Button>
      </Content>
    </Wrapper>
  );
};
export default MovieInfo;
