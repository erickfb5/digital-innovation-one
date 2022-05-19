const palindrome = str => {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let stringToCheck = [];
 
  for (let i = str.length - 1; i >= 0; i -= 1) { stringToCheck.push(str[i]) };
  let isPalindrome = stringToCheck.join("") === str;
  return isPalindrome ? true : false;
}
console.log(palindrome('noon'))