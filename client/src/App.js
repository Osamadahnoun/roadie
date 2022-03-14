import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Authorization from "./pages/Authorization/Authorization";
import Allposts from "./pages/AllPosts/AllPosts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Authorization /> */}
      <Header />
      <Allposts />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
