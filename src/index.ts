// optional chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
//   console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// optinal element access operator
customer?.[0] // access customer only if it's not undefiened and null, otherwise return undefiened

// optional call
let log: any = null;
log?.('hello');// call func only if it's not undefiened and null, otherwise return undefiened