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
function App() {
  return (
    <Router>
      <Navber></Navber>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <ApartmentDetail />
        </Route>
        <Route path="/rent/:id">
          <MyRent />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;