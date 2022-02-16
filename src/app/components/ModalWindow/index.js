const ModalWindow = ({ video, show, setShow }) => {
  const closeModal = () => {
    setShow(false);
  };
  if (!show) return null;
  return (
    <div
      className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/[0.6]"
      onClick={closeModal}
    >
      <div className="h-3/4 w-3/4">
        <iframe
          className="h-full w-full"
          src={video}
          allowFullScreen
          frameBorder="0"
          title="Movie trailer"
        />
      </div>
    </div>
  );
};
export default ModalWindow;
