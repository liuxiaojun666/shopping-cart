import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStore, RootStoreProvider } from './stores/RootStore';
import './index.css'
const rootStore = new RootStore();

ReactDOM.render(
  <RootStoreProvider store={rootStore}>
    <App />
  </RootStoreProvider>,
  document.getElementById('root')
);
