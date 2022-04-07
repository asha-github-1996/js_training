const calcTip = function (billvalue){
    // return 20/100 * billvalue;
    return billvalue >= 50 && billvalue <= 300 ? billvalue * 0.15 : billvalue * 0.2;
}
console.log(calcTip(100));

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

// const total= [calcTip(bills[0])+125, calcTip(bills[1])+555, calcTip(bills[2])+44];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total);

console.log(bills, tips, total);