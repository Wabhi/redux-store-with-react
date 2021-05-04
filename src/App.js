import './App.css';
import Header from "./Containers/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductList from "./Containers/ProductList"
import ProductDetails from "./Containers/ProductDetails"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route>404 PAGE NOT FOUND !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
