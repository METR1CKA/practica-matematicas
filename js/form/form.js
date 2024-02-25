var form = $('#form')

const func_methods = {
  eulerMejorado: eulerResult,
  newtonRaphson: newtonRaphsonResult,
  rungeKutta: rungeKuttaResult
}

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

  func_methods[method]({ decimales, form_data, result })
})