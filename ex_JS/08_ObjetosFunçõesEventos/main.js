function addNums(a = 3, b = 3, c = -5) {
    return b * b - 4 * a * c;
}
let x = addNums();
console.log(x);

// const delta = b * b - 4 * a * c;
const delta = () => {
    return b * b - 4 * a * c;
};


const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);


console.log(x1 + x2);