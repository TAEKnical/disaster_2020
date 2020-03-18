import React from "react";
import getMsg from "./getMsg";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import getMap from "./getMap";
import googlemap from "./components/googlemap"

function App(){
  return (
  <>
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/message" exact={true} component={getMsg} />
    <Route path="/maskmap" exact={true} component={getMap} />
    <Route path="/googlemap" exact={true} component={googlemap} />
  </HashRouter>
  <footer>
    footer
  </footer>
  </>
  )}

export default App;