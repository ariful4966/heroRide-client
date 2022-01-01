import decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { PrivateRoute } from "./components/Private/PrivateRoute";
import { getAdminData } from './redux/actions';



function App() {
 const dispatch = useDispatch();
  let data = sessionStorage.getItem('hero');
  if(data){
    const tokenData = decode(data)
    dispatch(getAdminData(tokenData.data))
  }
  return (
    
    <Router>
      <Switch>
      
        <Route path="/login">
          <Login/>
        </Route>
       <PrivateRoute path="/">
          <Home/>
        </PrivateRoute>
       
      </Switch>
    </Router>
    
  );
}

export default App;
