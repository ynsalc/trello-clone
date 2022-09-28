import React from "react";
import Sidebar from "components/Sidebar";
import Main from "pages/Main";

const Content = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Content;
