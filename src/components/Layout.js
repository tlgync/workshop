import { Switch, Route } from "react-router-dom";

import About, { Detail } from "../pages/Detail";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import { Header } from "./Header";

import "./Layout.css"

const GLOBAL_ROUTE = [
  {
    id: 0,
    to: "/",
    component: Home,
  },
  {
    id: 1,
    to: "/detail",
    component: Detail,
  },
  
];

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          {GLOBAL_ROUTE.map((m, index) => (
            <Route
              exact={index === 0}
              key={index}
              path={m.to}
              component={m.component}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};
