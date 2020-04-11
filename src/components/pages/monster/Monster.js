import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MonsterDetailContext } from "./MonsterDetailContext";

const Monster = ({ name, index }) => {
  const { getMonsterDetail } = useContext(MonsterDetailContext);

  return (
    <div>
      <div>
        <div
          className="card"
          style={{
            width: `18rem`,
          }}
        >
          <img
            className="card-img-top"
            src="https://pngimage.net/wp-content/uploads/2018/05/dungeons-and-dragons-png-6.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"></p>

            <Link to={`/MonsterDetail/` + name}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ margin: `2px` }}
                key={name}
                onClick={() => getMonsterDetail(index)}
              >
                {name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monster;
