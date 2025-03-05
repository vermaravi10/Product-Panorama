import React from "react";

import TopBarMenu from "./TopBarMenu";
import TopbarHeading from "./TopbarHeading";
import { DashboardHeader } from "./style";

const Topbar = () => {
  return (
    <DashboardHeader
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <TopbarHeading />
      <TopBarMenu />
    </DashboardHeader>
  );
};

export default Topbar;
