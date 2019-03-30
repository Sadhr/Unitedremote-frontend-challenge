import React from "react";

const loader = ({ loading }) => (
  <div className={`repos-loader ${loading ? "repos-loader__loading" : ""}`}>
    <h4 className="repos-loader__title">LOADING. . .</h4>
  </div>
);

export default loader;
