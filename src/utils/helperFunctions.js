const defaultArr = (length, value) => new Array(length).fill(value);
const nextTurn = (turn, length) => (turn === length ? 0 : turn + 1);

module.exports = {
  defaultArr,
  nextTurn,
};
