// const conn = require('../libs/connection.js');
// const Category = require('../models/Category.js');
const {getCollection} = require('../libs/mockup');

module.exports.categoryList = async function categoryList(ctx, next) {
  const key = 'Category';
  const res = await getCollection(key);
  const categories = res;
  ctx.response.body = {categories};
  next();
};
