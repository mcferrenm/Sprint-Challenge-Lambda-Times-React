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
      // this.setState({ isUserLoggedIn: true })
      console.log("handleAuthenticate clicked");
    };

    render() {
      // if (this.state.isUserLoggedIn) {
      //   return <Content />;
      // }
      // return <Login handleLogIn={this.setUserLogin}/>;
      return (
        <div>
          <Login handleAuthenticate={this.authenticateUser} />
          <Content />
        </div>
      );
    }
  };

export default authenticate;
