import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Authorization from "./pages/Authorization/Authorization";
import Allposts from "./pages/AllPosts/AllPosts";
import AddPost from "./pages/AddPost/AddPost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Allposts} />
          <Route exact path="/auth" component={Authorization} />
          <Route exact path="/add" component={AddPost} />
          <Route component={Allposts} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
