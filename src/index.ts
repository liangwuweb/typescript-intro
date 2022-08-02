// nullable types
function greet(name: string | null | undefined ) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('null or undefined detected! Please input valid value.')
  }
  
}

greet(null);