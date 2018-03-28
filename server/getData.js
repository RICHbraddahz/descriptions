const { getDescriptionById } = require('../database/models/descriptionModel.mongo');

const getData = async (id, mongoClient, redisClient) => {
  let cachedResult = await redisClient.getAsync(id);

  if (cachedResult) {
    return JSON.parse(cachedResult);
  }

  const db = mongoClient.db('descriptions_n');
  const collection = db.collection('descriptions_n');

  let result = await getDescriptionById(collection, id);
  redisClient.setAsync(id, JSON.stringify(result));
  return result;
};

module.exports = getData;
