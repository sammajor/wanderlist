import { useDispatch } from "react-redux";
import { reset, search } from "../store/parkSearchSlice";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchCriteria, setSearchCriteria] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchCriteria));
  };
  return (
    <form
      className="row my-2 bottom-box"
      style={{ width: "100%" }}
      onSubmit={handleSubmit}
    >
      <div className="col">
        <input
          onChange={(e) => setSearchCriteria(e.target.value)}
          value={searchCriteria}
          className="mt-2 form-control form-control-lg"
          type="text"
          placeholder="Find a park"
        ></input>
      </div>
      <div className="col">
        <button className="btn btn-lg btn-square search-btn" type="submit">
          Search
        </button>
        <button
          className="reset-text btn btn-lg btn-link search-text"
          type="button"
          onClick={() => {
            dispatch(reset());
            setSearchCriteria("");
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
