// import "./App.css";
// import React, { Component } from "react";
// import NavBar from "./components/NavBar";
// import News from "./components/News";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default class App extends Component {
// apiKey=process.env.REACT_APP_NEWS_API
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <Routes>
//   <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={5} country="us" category="General" />} />
//   <Route exact path="/business" element={<News apiKey={this.apiKey} key="Business" pageSize={5} country="us" category="Business" />} />
//   <Route exact path="/entertainment" element={<News  apiKey={this.apiKey} key="Entertainment" pageSize={5} country="us" category="Entertainment" />} />
//   <Route exact path="/general" element={<News apiKey={this.apiKey} key="General" pageSize={5} country="us" category="General" />} />
//   <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={5} country="us" category="health" />} />
//   <Route exact path="/science" element={<News apiKey={this.apiKey} key="Science" pageSize={5} country="us" category="Science" />} />
//   <Route exact path="/sports" element={<News apiKey={this.apiKey} key="Sports" pageSize={5} country="us" category="Sports" />} />
//   <Route exact path="/technology" element={<News apiKey={this.apiKey} key="Technology" pageSize={5} country="us" category="Technology" />} />
// </Routes>

//         </Router>
//       </div>
//     );
//   }
// }

import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                pageSize={5}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                pageSize={5}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                key="general"
                pageSize={5}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                pageSize={5}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                pageSize={5}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                pageSize={5}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                pageSize={5}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
