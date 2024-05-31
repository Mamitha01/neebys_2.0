const { createCategory } = require('./category');

async function insertSampleData() {
  try {
    console.log('Inserting sample data...');
    await createCategory({
      name: 'Electronics',
      parent_id: null,
      description: 'Category for all electronic items',
      slug: 'electronics'
    });

    await createCategory({
      name: 'Mobile Phones',
      parent_id: null, // Use the actual ObjectId of the parent category if needed
      description: 'Subcategory for mobile phones',
      slug: 'mobile-phones'
    });

    console.log('Sample categories inserted successfully');
  } catch (err) {
    console.error('Error inserting sample data', err);
  }
}

// Call the function to insert sample data
insertSampleData();
