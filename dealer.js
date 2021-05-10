const supes = [
  { id: 1, alias: "Captain America", firstName: "Steve", lastName: "Rogers" },
  { id: 2, alias: "Iron Man", firstName: "Anthony", lastName: "Stark" },
  { id: 3, alias: "Thor", firstName: "Thor", lastName: "Odinson" },
  { id: 4, alias: "Hulk", firstName: "Bruce", lastName: "Banner" },
  { id: 5, alias: "Black Widow", firstName: "Natasha", lastName: "Romanof" },
  { id: 6, alias: "Hawkeye", firstName: "Clint", lastName: "Barton" },
];

const list = () => {
  return [...supes];
};

const find = (id) => {
  const avengers = supes.find((avengers) => avengers.id === +id);
  return { ...avengers };
};

module.exports = { list: list, find: find };
