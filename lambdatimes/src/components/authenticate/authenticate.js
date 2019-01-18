import React from "react";

const authenticate = Content => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isUserLoggedIn: false
      };
    }

    authenticateUser = () => {
      this.setState({ isUserLoggedIn: true });
    };

    render() {
      if (this.state.isUserLoggedIn) {
        return <Content />;
      }
      return <Login handleAuthenticate={this.authenticateUser} />;
    }
  };

export default authenticate;
