import React from "react";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Login from "./components/LoginModal";

import authenticate from "./components/authenticate/authenticate";

const ProtectedContent = authenticate(TopBar)(Header)(Content);

const App = () => {
  return (
    <div className="App">
      {/* <TopBar />
      <Header /> */}
      <ProtectedContent />
    </div>
  );
};

export default App;
