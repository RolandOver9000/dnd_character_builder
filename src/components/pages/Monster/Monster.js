import React, {  useContext } from "react";
import { Link } from "react-router-dom";

import { MonsterDetailContext } from "./MonsterDetailContext";

const Monster = (props) => {
  const { getMonsterDetail } = useContext(MonsterDetailContext);

  return (
    <div>
      <div>
        <div
          class="card"
          style={{
            width: `18rem`,
          }}
        >
          <img
            class="card-img-top"
            src="https://pngimage.net/wp-content/uploads/2018/05/dungeons-and-dragons-png-6.png"
            alt="Card image cap"
          ></img>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text"></p>

            <Link to={`/MonsterDetail/` + props.name}>
              <button
                type="button"
                class="btn btn-primary"
                style={{ margin: `2px` }}
                key={props.name}
                onClick={() => getMonsterDetail(props.index)}
              >
                {props.name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monster;
