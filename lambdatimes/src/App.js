import React from "react";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import LoginModal from "./components/LoginModal";

// import authenticate from "./components/authenticate/authenticate";

// const ProtectedContent = authenticate(Content)(LoginModal);

const App = () => {
  return (
    <div className="App">
      <LoginModal />
      {/* <TopBar />
      <Header />
      <Content /> */}
    </div>
  );
};

export default App;
