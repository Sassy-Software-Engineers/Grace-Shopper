import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <Container>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </Container>,
  document.getElementById('app')
);
