import "./App.css";
import React from "react";
import HomePage from "./Pages/Home/Home.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.component";
import SignPage from "./Pages/Sign/Sign.component";
class App extends React.Component<Record<string, never>>  {

  render(): React.ReactNode {
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/sign' component={SignPage}></Route>
      </Switch>
    </div>
    )
  }
}
export default App;
