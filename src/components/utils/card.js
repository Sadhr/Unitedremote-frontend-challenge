import React from "react";
import githubImg from "../../Resources/images/github.png";
const card = props => {
  return (
    <div className="box">
      <div className="box-header">
        <div className="image-profile">
          <img src={props.image ? props.image : githubImg} alt="" id="image" />
        </div>
      </div>

      <div className="divider" />
      <div className="box-content">
        <h3>{props.repositoryName}</h3>
        <p>{props.description}</p>
        <div className="box-content-footer">
          <div className="stars-issues">
            <div id="stars">
              <i className="material-icons" style={{ marginRight: ".3em" }}>
                stars
              </i>
              {props.stars}
            </div>
            <div id="issues">
              <i className="material-icons" style={{ marginRight: ".3em" }}>
                error
              </i>
              {props.issues}
            </div>
          </div>

          <div>
            <p>
              Submitted {props.createdAt} days ago by{" "}
              <span style={{ color: "black", fontWeight: 500 }}>
                {props.owner}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
