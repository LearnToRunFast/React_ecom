import "./App.css";
import React from "react";
import HomePage from "./Pages/Home/Home.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.component";
import SignPage from "./Pages/Sign/Sign.component";
import {auth} from "./firebase/firebase.utils";
interface State {
    currentUser: any
}
class App extends React.Component<Record<string, never>,State>  {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = {
      currentUser: null,
    };
  }
  // really cant find the type of the firebase.Unsubscribe
  unsubscribeFromAuth:any = null;
  componentDidMount():void {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount(): void {
    if (this && this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }
  render(): React.ReactNode {
    return (
      <div>
      <Header currUser={this.state.currentUser}/>
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
