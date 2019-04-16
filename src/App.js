import React, { Component, Fragment } from 'react';
import { GlobalStyled } from './style.js';
import { Provider } from 'react-redux';
import store from './store/store'
import HeaderNav from './common/header/headerNav';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Fragment>
            <GlobalStyled/>
            <HeaderNav />
          </Fragment>
      </Provider>
    );
  }
}
export default App;
