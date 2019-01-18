import React, { Fragment } from "react";

const authenticate = TopBar => Header => Content =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isUserLoggedIn: false
      };
    }

    authenticateUserToggle = () => {
      this.setState(prevState => ({
        isUserLoggedIn: !prevState.isUserLoggedIn
      }));
    };

    render() {
      if (this.state.isUserLoggedIn) {
        return (
          <Fragment>
            <TopBar
              handleAuth={this.authenticateUserToggle}
              isUserLoggedIn={this.state.isUserLoggedIn}
            />
            <Header />
            <Content />;
          </Fragment>
        );
      }
      return (
        <Fragment>
          <TopBar
            handleAuth={this.authenticateUserToggle}
            isUserLoggedIn={this.state.isUserLoggedIn}
          />
          <Header />
        </Fragment>
      );
    }
  };

export default authenticate;
