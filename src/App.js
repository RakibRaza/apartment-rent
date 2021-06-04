import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navber from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";
import ApartmentDetail from "./Components/ApartmentDetail/ApartmentDetail";
import MyRent from "./Components/ApartmentDetail/MyRent/MyRent";
import Login from "./Components/Login/Login";
import { createContext, useState } from 'react';
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
export const UserContext = createContext();
function App() {
  const [logUser, setLogUser] = useState({});
  return (
    <UserContext.Provider value={[logUser, setLogUser]}>

      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivetRoute path="/details/:id">
            <ApartmentDetail />
          </PrivetRoute>
          <Route path="/rent/:id">
            <MyRent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider >
  );
}

export default App;