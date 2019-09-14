import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import WordCountApp from "./examples/01/WordCountApp";
import LeapYearApp from "./examples/02/LeapYearApp";
import TestingApp from "./examples/03/App";
import TestingApp2 from "./examples/04/App";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-3">
          <aside>
            <h2>Examples</h2>
            <h5>Unit testing</h5>
            <nav className="nav flex-column">
              <NavLink to="/01" className="nav-link">
                01
              </NavLink>
              <NavLink to="/02" className="nav-link">
                02
              </NavLink>
              <h5>Enzyme testing</h5>
              <NavLink to="/03" className="nav-link">
                03
              </NavLink>
              <NavLink to="/04" className="nav-link">
                04
              </NavLink>
            </nav>
          </aside>
        </div>
        <div className="col-9">
          <h1>Testing</h1>
          <br />
          {/* JS testing */}
          <Route exact path="/01" component={WordCountApp} />
          <Route exact path="/02" component={LeapYearApp} />
          {/* Unit testing */}
          <Route exact path="/03" component={TestingApp} />
          <Route exact path="/04" component={TestingApp2} />
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
