import React from "react";

import "./index.css";

const AppItem = (props) => {
  const { appDetails } = props;
  const { imageUrl, appName } = appDetails;

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  );
};

export default AppItem;
