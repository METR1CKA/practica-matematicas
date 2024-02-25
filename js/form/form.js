var form = $('#form')

form.submit(event => {
  event.preventDefault()

  var result = $('#result-content')
  var method = m.val()

  const {
    decimales,
    ...form_data
  } = form.serializeArray()
    .reduce((obj, item) => {
      obj[item.name] = item.value
      return obj
    }, {})

  if (method == 'eulerMejorado') eulerResult({ decimales, form_data, result })

  if (method == 'newtonRaphson') newtonRaphsonResult({ decimales, form_data, result })

  if (method == 'rungeKutta') {
    const {
      'rk4o-paso': paso,
      'rk4o-x0': x0,
      'rk4o-y': y,
      'rk4o-yn': yn,
      'rk4o-f': f,
    } = form_data

    console.log({
      decimales, paso, x0, y, yn, f
    })
  }
})