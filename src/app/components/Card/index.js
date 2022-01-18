import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Image, Content } from "../Card/Card.style";
//Components
import Button from "../Button/Button.style";

const Card = ({ img, title, description, id, isFavorite, toggleFavorite }) => {
  const DATA_KEY = "data";
  const onClick = () => {
    toggleFavorite(id);
  };
  const token = localStorage.getItem("token");
  return (
    <Wrapper key={id}>
      <Link to={token ? `/content/${id}` : "/signin"}>
        <Image src={img} alt="movie poster" />
      </Link>
      <Content>
        <Link to={token ? `/content/${id}` : "/signin"}>
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

function mapStateToProps({ content }, { id }) {
  return {
    isFavorite: content.favorites.includes(id),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "CONTENT/TOGGLE_FAVORITES", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
