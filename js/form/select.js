var m = $('#method')

const methods = {
  eulerMejorado: {
    div: $('.euler-mejorado'),
    inputs: ['#em-iteraciones', '#em-paso', '#em-x', '#em-y', '#em-f']
  },
  newtonRaphson: {
    div: $('.newton-raphson'),
    inputs: ['#nr-x', '#nr-f']
  },
  rungeKutta: {
    div: $('.runge-kutta-4to-orden'),
    inputs: ['#rk4o-paso', '#rk4o-x0', '#rk4o-y', '#rk4o-yn', '#rk4o-f']
  }
}

function change() {
  var method = m.val()

  if (method.toUpperCase() !== 'NA') {
    $('#decimales').prop('disabled', false)
    $('#calcular').prop('disabled', false)
  } else {
    $('#decimales').prop('disabled', true)
    $('#calcular').prop('disabled', true)
  }

  for (var key in methods) {
    if (key === method) {
      methods[method].div.show()
      methods[method].inputs.forEach(function (input) {
        $(input).attr('required', 'required')
      })
    } else {
      methods[key].div.hide()
      methods[key].inputs.forEach(function (input) {
        $(input).removeAttr('required')
      })
    }
  }
}

change()

m.change(change)