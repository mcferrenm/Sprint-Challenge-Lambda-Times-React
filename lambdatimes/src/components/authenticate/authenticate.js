import React from "react";

const authenticate = Content => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (false) {
        return <Content />;
      }
      return <Login />;
    }
  };

export default authenticate;
