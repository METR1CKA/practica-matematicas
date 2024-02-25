var form = $('#form')

form.submit(event => {
  event.preventDefault()

  var result = $('#result-content')
  var method = m.val()

  // var resultado = iteraciones ? decimales * iteraciones : decimales
  var resultado = 'Resultado de la operación'

  if (method == 'eulerMejorado') {
    // Aquí debes llamar a la función correspondiente en metodos.js
  }

  if (method == 'newtonRaphson') {
    // Aquí debes llamar a la función correspondiente en metodos.js
  }

  if (method == 'rungeKutta') {
    // Aquí debes llamar a la función correspondiente en metodos.js
  }

  result.text(`${resultado} ${method}`)
})