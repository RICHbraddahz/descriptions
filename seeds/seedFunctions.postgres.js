/* eslint-disable no-await-in-loop */
const casual = require('casual');

const capitalLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
const boatName = () => capitalLetters[casual.integer(0, 26)] + casual.integer(1, 200);

const arrayOfStrings = (count) => {
  let strings = [];
  for (let i = 0; i < count; i += 1) {
    strings.push(casual.string);
  }
  return strings;
};

const makeOneDescription = id => ({
  id,
  author: JSON.stringify({ // :^)
    name: casual.first_name,
    thumbnail: 'https://robohash.org/quidemsiteveniet.jpg?size=50x50&set=set1', // todo: replace with image url
    link: '#'
  }),
  name: boatName(),
  dock: casual.street,
  capacity: casual.integer(20, 40),
  boatrules: JSON.stringify(arrayOfStrings(casual.integer(0, 5))),
  heads: casual.integer(1, 10),
  description: casual.string,
  bedrooms: JSON.stringify({
    capacity: casual.integer(1, 5),
    sleepingArrangement: casual.array_of_digits(casual.integer(1, 5)),
  }),
  amenities: JSON.stringify({
    priority: {
      anchor: casual.boolean,
      engine: casual.boolean,
      lifeJacket: casual.boolean,
      twoWayRadio: casual.boolean,
      soundSystem: casual.boolean,
      tv: casual.boolean,
      kitchen: casual.boolean,
      ac: casual.boolean,
      heating: casual.boolean,
    },
    optional: {
      inflatables: casual.boolean,
      fishingGear: casual.boolean,
      scubaGear: casual.boolean,
      harpoons: casual.boolean,
      sharkCage: casual.boolean,
      medication: casual.boolean,
      wifi: casual.boolean,
      pool: casual.boolean,
    },
  })
}
);

const makeDescriptionBatch = (startingValue, count) => {
  let descriptions = [];
  for (let i = startingValue; i < startingValue + count; i += 1) {
    descriptions.push(makeOneDescription(i));
  }
  return descriptions;
};

module.exports = { makeOneDescription, makeDescriptionBatch };
