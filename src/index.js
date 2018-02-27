import 'core-js/shim';

import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './redux/createStore';
import Root from './components/Root';

const store = createStore();

const render = Component => {
  ReactDOM.render(<Component store={store} />, document.getElementById('root'));
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => render(Root));
}
