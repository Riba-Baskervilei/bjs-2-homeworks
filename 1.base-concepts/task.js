"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = b**2 - 4 * a * c;

  if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (d > 0) {
    let firstRoot = (-b + Math.sqrt(d) )/(2*a);
    let secondRoot = (-b - Math.sqrt(d) )/(2*a);
    arr.push(firstRoot, secondRoot);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let TotalMortgage = monthlyPayment * countMonths;

  return +TotalMortgage.toFixed(2);
}