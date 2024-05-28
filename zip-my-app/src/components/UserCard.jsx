import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function UserCard(props) {
    
    const user = useContext(UserContext);
    const navigate = useNavigate();

    function showDetail(id){
        navigate(`user-detail/${id}`)
    }

    return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://random.imagecdn.app/500/150"
          alt="..."
        />
        <div className="card-body">
            <p>{user}</p>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <b>{props.email}</b>
            <p>{props.username}</p>
          </p>
          <button onClick={()=> showDetail(props.id)} className="btn btn-primary">
            Show Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
