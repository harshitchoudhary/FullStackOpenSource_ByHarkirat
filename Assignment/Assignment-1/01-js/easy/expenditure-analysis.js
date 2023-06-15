function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};
  
    for (const transaction of transactions) {
      const category = transaction.category;
      const price = transaction.price;
  
      if (category in categoryTotals) {
        categoryTotals[category] += price;
      } else {
        categoryTotals[category] = price;
      }
    }
  
    const result = [];
  
    for (const category in categoryTotals) {
        result.push({ category: category, totalSpent: categoryTotals[category] });
    }
  
    return result;
  }

  module.exports = calculateTotalSpentByCategory;