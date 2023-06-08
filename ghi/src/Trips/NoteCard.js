// import "./carousel.css";

const NoteCard = (props) => {
  const { title, description, id, handleCardClick } = props;
  const noteId = id.toString();
  return (
    <div
      onClick={handleCardClick}
      className="card my-3 mx-5 shadow note-sticky"
      style={{ width: "250px" }}
    >
      <div className="card-body">
        <h5 className="card-title note-title">{title}</h5>
        <p className="card-text note-body">{description}</p>
      </div>
      <div className="text-center">
        <button
          type="button"
          id={noteId}
          className="btn note-button btn-sm mb-2"
          onClick={handleCardClick}
        >
          View
        </button>
      </div>
    </div>
  );
};
export default NoteCard;
