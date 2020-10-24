import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import App from './App';
import './index.css';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(reducers, enhancer);

ReactDOM.render(
  <>
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={App} />
              </Switch>
            </BrowserRouter>
          </Provider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
