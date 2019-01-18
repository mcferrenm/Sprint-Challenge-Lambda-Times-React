import React, { Fragment } from "react";

const authenticate = TopBar => Header => Content =>
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
        return (
          <Fragment>
            <TopBar />
            <Header />
            <Content />;
          </Fragment>
        );
      }
      return (
        <Fragment>
          <TopBar handleAuth={this.authenticateUser} />
          <Header />
        </Fragment>
      );
    }
  };

export default authenticate;
