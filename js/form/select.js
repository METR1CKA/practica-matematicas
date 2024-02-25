var m = $('#method')

const methods = {
  eulerMejorado: {
    div: $('.euler-mejorado'),
    inputs: ['#em-iteraciones', '#em-paso', '#em-x', '#em-y', '#em-f'],
    load: $('.euler-mejorado').load('components/form/euler-mejorado.html')
  },
  newtonRaphson: {
    div: $('.newton-raphson'),
    inputs: ['#nr-x', '#nr-f'],
    load: $('.newton-raphson').load('components/form/newton-raphson.html')
  },
  rungeKutta: {
    div: $('.runge-kutta-4to-orden'),
    inputs: ['#rk4o-paso', '#rk4o-x0', '#rk4o-y', '#rk4o-yn', '#rk4o-f'],
    load: $('.runge-kutta-4to-orden').load('components/form/runge-kutta.html')
  }
}

function change() {
  var method = m.val()

  const value = method.toUpperCase() === 'NA'

  $('#decimales').prop('disabled', value)
  $('#calcular').prop('disabled', value)

  $('#decimales').val('')

  for (var key in methods) {
    methods[key].inputs.forEach(function (input) {
      $(input).val('')
    })

    if (key === method) {
      methods[method].load
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