import React from "react";

import "./index.css";

const TabItem = (props) => {
  const { tabDetails, setActiveTabId, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const onClickTab = () => {
    setActiveTabId(tabId);
  };

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";

  return (
    <li className="tabs-item">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
