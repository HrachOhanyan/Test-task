import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';

import LoadingPage from "./features/loadinPage/LoadingPage";

const Sidebar = lazy(() => import("./features/sidebar/Sidebar"));
const CategoryView = lazy(() => import("./features/categoryView/CategoryView"));

export const CategoriesRoutes = {
    CategoryView: (id = ":id") => `/category/${id}`,
};

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingPage/>}>
          <Router basename="/">
              <Sidebar/>
              <div style={{paddingLeft: "240px"}}>
                  <Switch>
                      <Route exact path="/">
                          <div className="homePage">
                              <h2>Home page</h2>
                          </div>
                      </Route>
                      <Route path={CategoriesRoutes.CategoryView()}>
                          <CategoryView/>
                      </Route>
                  </Switch>
              </div>
          </Router>
      </Suspense>
    </div>
  );
}

export default App;


//
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <Counter />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <span>
//           <span>Learn </span>
//           <a
//               className="App-link"
//               href="https://reactjs.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux-toolkit.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//               className="App-link"
//               href="https://react-redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
// </header>