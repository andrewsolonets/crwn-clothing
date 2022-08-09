import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  return (
    <Fragment>
      <Directory />
    </Fragment>
  );
}

export default Home;
