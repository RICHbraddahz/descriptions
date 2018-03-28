const App = require('../client/dist/bundle').default;
const React = require('react');
const ReactDOM = require('react-dom/server');
const { getDescriptionById } = require('../database/models/descriptionModel.mongo');

const getCachedData = async (id, redisClient) => redisClient.getAsync(id);

const getRenderedComponent = async (id, mongoClient, redisClient) => {
  const cachedHtml = getCachedData(id, redisClient);
  if (cachedHtml) {
    return cachedHtml;
  }

  const db = mongoClient.db('descriptions_n');
  const collection = db.collection('descriptions_n');

  const itemData = await getDescriptionById(collection, id);

  const html = ReactDOM.renderToString(React.createElement(App, { data: itemData }));
  redisClient.setAsync(id, html);

  return html;
};

module.exports = getRenderedComponent;
