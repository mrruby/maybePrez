const { inc3 } = require('../utils');
const Maybe = require('crocks/Maybe');

// Maybe = Just x | Nothing

const safeNum = val =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing();

const input = safeNum(undefined);
const result = input.map(inc3);

result;
