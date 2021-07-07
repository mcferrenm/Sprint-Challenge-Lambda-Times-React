import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  const isSelectedTabClass =
    props.selectedTab === props.tab ? "tab active-tab" : "tab";

  return (
    <div
      className={isSelectedTabClass}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

// Make sure you include PropTypes on your props.

export default Tab;
