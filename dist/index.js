"use strict";
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(10));
//# sourceMappingURL=index.js.map