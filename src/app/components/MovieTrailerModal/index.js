import { Wrapper, Content } from "./MovieTrailerModal.style";

const MovieTrailerModal = ({ video, show, setShow }) => {
  const closeModal = () => {
    setShow(false);
  };
  if (!show) {
    return null;
  }
  return (
    <Wrapper onClick={closeModal}>
      <Content>
        <iframe
          src={video}
          frameBorder="0"
          title="movie trailer"
          allowFullScreen
        />
      </Content>
    </Wrapper>
  );
};
export default MovieTrailerModal;
