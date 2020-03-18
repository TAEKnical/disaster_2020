import React from "react";
import getMsg from "./getMsg"
import {HashRouter, Route} from "react-router-dom"

function App(){
  return <HashRouter>
    <Route path="/" exact={true} component={getMsg} />
    <Route path="/message" exact={true} component={getMsg} />
  </HashRouter>
}

export default App;