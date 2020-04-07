import React from "react";
import { Link } from "react-router-dom";

const Characters = (props) => {
  return (
    <div>
      <Link to="/add-new-character">
        {" "}
        <button>Create new character</button>
      </Link>
    </div>
  );
};
export default Characters;
