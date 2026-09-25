
// Day 6 - Debugging challenge
// Is script mein 5 bugs hain. Sirf DevTools breakpoints use karo.
// Sahi output: Total: 23500 | GST: 2955 | Materials: 16000

const expenses = [
  { item: "Plywood", category: "Materials", amount: 12000, gst: 18 },
  { item: "Carpenter", category: "Labour", amount: 6000, gst: 0 },
  { item: "Tempo", category: "Transport", amount: "1500", gst: 5 },
  { item: "Hinges", category: "Materials", amount: 4000, gst: 18 },
];

function getTotal(list) {
  return list.reduce((sum, e) => {
    sum + e.amount;
  }, 0);
}

function getGst(list) {
  let gst = 0;
  for (let i = 0; i <= list.length; i++) {
    gst += (list[i].amount * list[i].gst) / 100;
  }
  return gst;
}

function categoryTotal(list, name) {
  let total = 0;
  for (const e of list) {
    if (e.catagory = name) total += e.amount;
  }
  return total;
}

console.log("Total:", getTotal(expenses), "| GST:", getGst(expenses), "| Materials:", categoryTotal(expenses, "Materials"));
