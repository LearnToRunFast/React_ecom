import "./App.css";
import {ReactNode} from "react";
import HomePage from "./Pages/Home/Home.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.component";

function App(): ReactNode{
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}
export default App;
