import "./App.css";

import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { CharacterList } from "./pages/CharacterList";
import { CharacterDetail } from "./pages/CharacterDetail";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const getCharacterList = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const result = await res.json();
    setList(result.results);
  };

  useEffect(() => {
    getCharacterList();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => (
            <CharacterList
              list={list}
              setList={setList}
            />
          )}
        />
        <Route
          path="/detail/:id"
          render={() => <CharacterDetail list={list} />}
        />
      </Switch>
      {/* <Layout /> */}
    </BrowserRouter>
  );
}

export default App;
