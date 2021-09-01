import "./App.css";
import React,{useEffect} from "react";
import HomePage from "./Pages/Home/Home.component";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./Components/Header/Header.component";
import SignPage from "./Pages/Sign/Sign.component";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { useDispatch, useSelector} from 'react-redux';
import {getUser} from './redux/selector';
import {fetchCollectionsStartAsync, setUser} from './redux/action';
import CheckoutPage from "./Pages/Checkout/Checkout.component";
import Contact from "./Pages/Contact/Contact.component";

const App:React.FC = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        if (!userAuth) {
          // logout
          dispatch(setUser(userAuth));
          return;
        }
        const userRef = await createUserProfileDocument(userAuth);
        if (!userRef) {
          console.log("ERR: get back null userRef")
          return;
        }
        userRef.onSnapshot((snapShot) => {
          const data = snapShot.data();
          if (!data) {
            console.log("ERR: get back null data on snapshot")
            return;
          }
          const user = {
            id: snapShot.id,
            displayName: data.displayName,
            email: data.email,
            createdAt: data.createdAt,
          }
          dispatch(setUser(user));
        });
      });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>
        <Route exact path='/sign' 
              render={()=> ( 
                user? (<Redirect to='/'/>)
                    : (<SignPage/>)
              )} >
        </Route>
      </Switch>
    </div>
  )
}
export default App;