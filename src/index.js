import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => render(Root));
}
