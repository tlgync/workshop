import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { List } from "./pages/List";
import ListDetail from "./pages/ListDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={() => <List />} />
        <Route path="/detail/:id" render={() => <ListDetail />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
