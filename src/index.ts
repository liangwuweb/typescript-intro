// Union Types
function kgToLbs(weight: number | string) {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2; 
  }
  else {
      return parseInt(weight) * 3;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs('20'));




