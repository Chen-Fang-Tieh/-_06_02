import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";

const App_pro=()=> <h2>Home</h2>;
const Top_Page=()=><h2>About</h2>;

const App=()=>(
  <Router>
    <div>
      <nav>
        <u1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/"></Link>
          </li>
        </u1>
      </nav>

      <Route path="/" exact component={App_pro}/>
      <Route path="/about" exact component={Top_Page}/>
    </div>
  </Router>
)

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
