
const expenses = [
  { category : "rent", amount : 8000 },
  { category : "busFare", amount : 1000 },
  { category : "grocery", amount : 1500 },
  { category : "membership", amount : 1200 },
  { category : "rent", amount : 7000 },
  { category : "busFare", amount : 1300 },
  { category : "medicine", amount : 1800 },
];

const budgets = {
  rent : 15000,
  busFare : 5000,
  grocery : 3500,
  membership : 3000,
  medicine : 2500,
};


const totalSpent = expenses.reduce((total, expense) => {
    return total + expense.amount;
}, 0); 

console.log("Total spent:", totalSpent);

