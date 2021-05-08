import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51II3ZULS0oTXkwrZviA9BmTS8sNLZaZSuCJGemvQElsObGpQrRnL6xUV2AjgWuRqmEiZ5PP5vdq7UF0DYxDyGZTl003KcvxvVh"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Route path="/login" component={Login} />
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>{" "}
          </Route>
          <Route path="/orders" component={Orders}/>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
