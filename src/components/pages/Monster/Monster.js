import React from "react";
import { Link } from "react-router-dom";
import MonsterDetail from "./MonsterDetail";

const Monster = ({ name }) => {
  return (
    <div>
      <div>
        <Link to={`/MonsterDetail/` + name}>
          <button type="button" class="btn btn-info" style={{ margin: `2px` }}>
            {name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Monster;
