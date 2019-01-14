const { join, split, toLower } = require('ramda');

const {
  and,
  compose,
  isEmpty,
  isString,
  Maybe,
  not,
  prop,
  safe
} = require('crocks');

const isNotEmptyString = and(not(isEmpty), isString);
const createUrlSlug = compose(
  join('-'),
  split(' '),
  toLower
);
const createUrl = slug => `https://www.netguru.com/blog/${slug}`;
const createUrlFromName = compose(
  createUrl,
  createUrlSlug
);

const getArticleName = obj =>
  prop('name', obj)
    .chain(safe(isNotEmptyString))
    .alt(Maybe.of('page-not-found'));

module.exports = {
  getArticleName,
  createUrlFromName
};
