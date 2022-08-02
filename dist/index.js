"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 3;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs('20'));
//# sourceMappingURL=index.js.map