import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import content from "../../../content";
//Styles
import Button from "../Button/Button.style";
import { Wrapper, Content, Image, Buttons } from "./MovieInfo.style";
import ModalWindow from "../ModalWindow";

const MovieInfo = ({ title, img, description, id, video }) => {
  const [show, setShow] = useState(false);
  const isFavorite = useSelector((state) =>
    content.selectors.isFavorite(state, id)
  );
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(content.actions.toggleFavorite(id));
  };
  const openModal = () => {
    setShow(true);
  };
  return (
    <Wrapper>
      <Image src={img} alt="Movie image" />
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <Buttons>
          <Button onClick={openModal}>Watch Video</Button>
          <Button onClick={onClick} isSpecial={isFavorite}>
            {isFavorite ? "Remove from ❤" : "Add To Favorites"}
          </Button>
        </Buttons>
      </Content>
      <ModalWindow video={video} setShow={setShow} show={show} />
    </Wrapper>
  );
};

export default MovieInfo;