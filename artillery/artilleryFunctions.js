const randomId0to10Mil = () => {
  userContext.vars.id = Math.floor(Math.random() * 10000000);
}

module.exports = { randomId0to10Mil };
