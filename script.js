function indexOfIgnoreCase(s1, s2) {
  // write your code here
  let char = substr[0]
  for(let i=0; i<str.length; i++) {
    if(str[i].toLowerCase() === char || str[i].toUpperCase() ===char){
      return i;
    } 
  }
  return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
