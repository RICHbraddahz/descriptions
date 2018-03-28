const App = require('../client/dist/bundle').default;
const React = require('react');
const ReactDOM = require('react-dom/server');

const renderComponent = data => ReactDOM.renderToString(React.createElement(App, { data }));

module.exports = renderComponent;
