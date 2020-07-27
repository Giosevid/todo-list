#Task 3

function equalShiftsAmount(input) {
  const nuevo = input;
  const cadena = nuevo.split("")

  let nuevaCadena = cadena.pop()

  const cadenaDos = cadena.reverse()

  for (const x = cadena.length - 1; x >= 0; x--) {
   console.log(nuevaCadena += cadena[x])
  }
}

equalShiftsAmount("nixi1")
