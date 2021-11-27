import React from 'react';
import { useDispatch } from 'react-redux';
import { FetchNews } from './redux/ducks/news/actionCreators';
import {Header} from './component/Header'
import './scss/app.css';
import {Main} from './pages/main';
import {Admin} from './pages/admin';
import {Articles} from './pages/article';

import {
  Route, Switch
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchNews());
},[]);
  return (
    <div className="App">
      <Header />
      <main>
          <Switch>

          <Route path="/" exact component={Main} />
        <Route path="/admin" exact component={Admin} />
          <Route path="/:id" exact component = {Articles}/>
          </Switch>
      </main>
    </div>
  );
}


export default App;
