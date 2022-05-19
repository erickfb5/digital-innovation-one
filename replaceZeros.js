const replaceZeros = array => {
  if (array[0] == undefined) return -1;

  let newString = array.toString();

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      newString = newString.replace(array[i], 0);
    }
  };
 
  let newArray = newString.split(',').map(num => +num);
  return newArray;
}
replaceZeros([1, 3, 4, 6, 80, 33, 23, 90]);