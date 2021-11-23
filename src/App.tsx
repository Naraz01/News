import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { FetchNews } from './redux/ducks/news/actionCreators';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchNews());
},[]);
  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
