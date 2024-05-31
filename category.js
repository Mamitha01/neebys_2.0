const connectDB = require('./db');

async function createCategory(category) {
  const db = await connectDB();
  const result = await db.collection('categories').insertOne(category);
  console.log(`New category created with the following id: ${result.insertedId}`);
}

async function getCategories() {
  const db = await connectDB();
  const categories = await db.collection('categories').find({}).toArray();
  return categories;
}

module.exports = { createCategory, getCategories };
