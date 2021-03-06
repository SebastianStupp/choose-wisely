import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './Pages/Add';
import Vote from './Pages/Vote';
import Result from './Pages/Result';

// import BottomImg from "./temple.jpg";
// import "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main></main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Add />
          </Route>
          <Route path="/Vote">
            <Vote></Vote>
          </Route>
          <Route path="/Result">
            <Result></Result>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
