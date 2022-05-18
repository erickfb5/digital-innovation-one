const compareNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) return console.log('Digite dois números válidos')
  
  const sum = Number(num1) + Number(num2);
  
  if (num1 != num2) {
    const isNotEqual = `Os números ${num1} e ${num2} não são iguais. Sua soma é ${sum},`
    return (sum == 10) ?
    console.log(`${isNotEqual} que é menor que 20.`) :
    (sum == 20) ?
    console.log(`${isNotEqual} que é maior que 10.`) :
    (sum > 20) ?
    console.log(`${isNotEqual} que é maior que 10 e maior que 20.`) :
    (sum > 10) ? console.log(`${isNotEqual} que é maior que 10 e menor que 20.`) :
    console.log(`${isNotEqual} que é menor que 10 e menor que 20.`)
  }
  else if (num1 == num2) {
    const isEqual = `Os números ${num1} e ${num2} são iguais. Sua soma é ${sum},`
    return (sum == 10) ?
      console.log(`${isEqual} que é menor que 20.`) :
      (sum == 20) ?
        console.log(`${isEqual} que é maior que 10.`) :
        (sum > 20) ?
          console.log(`${isEqual} que é maior que 10 e maior que 20.`) :
          (sum > 10) ? console.log(`${isEqual} que é maior que 10 e menor que 20.`) :
            console.log(`${isEqual} que é menor que 10 e menor que 20.`)
  }
}

compareNumbers(1,3);