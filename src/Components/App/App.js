import logo from './logo.svg';
import './App.css';
import Navber from './Components/Navber/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
export const UserContext = createContext();

function App() {
  const [logUser, setLogUser] = useState({});
  return (
    <UserContext.Provider value={[logUser, setLogUser]}>
    <Router>
      <div>
        <Navber/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider >
  );
}

export default App;
