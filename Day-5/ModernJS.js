//Day-3
//Refactor
class Calculate {
    constructor(marks = [], prices = []) {
        this.marks = marks;
        this.prices = prices;
    }

    totalMarks() {
        let sum = 0;
        for (const element of this.marks) {
            sum += element;
        }
        return sum;
    }

    discountOnEach() {
        for (let i = 0; i < ((this.prices).length); i++) {
            let discount = this.prices[i]/10
            this.prices[i] = this.prices[i] - discount
            console.log(this.prices[i])
        }
        return 
    }
}

const result = new Calculate([67, 87, 89, 98, 72], [250, 645, 870, 300]);
console.log(result.totalMarks())
console.log(result.discountOnEach())