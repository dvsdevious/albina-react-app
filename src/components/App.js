import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar";

import Home from "./pages/Home Page/Home";

import Nutrition from "./pages/Nutrition";
import Workouts from "./pages/Workouts";
import FAQs from "./pages/FAQs";
import Signup from "./auth/Signup";

import Dashboard from "./auth/Dashboard";
import Payment from "./pages/profile/Payment";
import Training from "./pages/profile/Training";
import UserSettings from "./pages/profile/UserSettings";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workouts" component={Workouts} />
            <Route path="/nutrition" component={Nutrition} />
            <Route path="/faqs" component={FAQs} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/usersettings" component={UserSettings} />
            <PrivateRoute exact path="/payment" component={Payment} />
            <PrivateRoute exact path="/training" component={Training} />
            <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
