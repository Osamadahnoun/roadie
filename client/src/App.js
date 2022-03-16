import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import LandingPage from "./pages/LandingPage/LandingPage";
import Authorization from "./pages/Authorization/Authorization";
import Allposts from "./pages/AllPosts/AllPosts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePost from "./pages/SinglePost/SinglePost";
import "bootstrap/dist/css/bootstrap.min.css";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Allposts} />
            <Route exact path="/post" component={SinglePost} />
            <Route exact path="/auth" component={Authorization} />
            <Route exact path="/profile" component={Profile} />
            <Route component={Allposts} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
