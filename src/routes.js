import React from "react";

import Layout from "./hoc/layout";
import Home from "./components/Home";

const routes = () => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default routes;
