import React from "react";

import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";

const layout = props => {
  return (
    <div>
      <Header />
      <div className="page_container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default layout;
