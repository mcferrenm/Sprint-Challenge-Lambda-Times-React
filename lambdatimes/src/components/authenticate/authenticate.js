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

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.authenticateUserToggle();
      }
    }

    render() {
      return (
        <Fragment>
          <TopBar
            handleAuth={this.authenticateUserToggle}
            isUserLoggedIn={this.state.isUserLoggedIn}
          />
          <Header />
          {this.state.isUserLoggedIn && <Content />}
        </Fragment>
      );
    }
  };

export default authenticate;
