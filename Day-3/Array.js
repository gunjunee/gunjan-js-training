//Arrays
let marks = [67,87,89,98,72]
let sum = 0
for (const element of marks) {
    sum += element
}

let average = sum/marks.length
console.table(average);



let prices = [250, 645, 870, 300]
let afterDiscount = []
for(let i = 0; i < prices.length; i++){
    let discount = prices[i]/10
    prices[i] = prices[i] - discount
    console.log(prices[i]);
    
}


const anime = ['chainsaw man', 'attack on titan', 'demon slayer', 'wotakoi', 'anohana']
const quantity = [47, 67, 89, 32, 10]
let a = anime.forEach((item) => {
    let capital = item.toUpperCase()
    console.log(capital);
    
})
console.table(a);



let b = anime.map((item) => {
    return item.toUpperCase()
    
})
console.table(b);


let c = anime.filter((item) => {
    return item.startsWith('a')
})
console.table(c);


let d = quantity.reduce((item1, item2) => {
    return item1 + item2
})
console.log(d);
