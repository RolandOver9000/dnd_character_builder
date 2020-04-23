import React from "react";
import Header from "./Header";

export const UserLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default UserLayout;
