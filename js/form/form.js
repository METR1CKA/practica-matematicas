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

  if (method == 'eulerMejorado') {
    const {
      'em-iteraciones': iteraciones,
      'em-paso': paso,
      'em-x': x,
      'em-y': y,
      'em-f': f,
    } = form_data

    const res = eulerMejorado({
      decimales: parseInt(decimales),
      iteraciones: parseInt(iteraciones),
      h: parseFloat(paso),
      xn: parseFloat(x),
      yn: parseFloat(y),
      f
    })

    result.load('components/tables/euler-table.html', function () {
      let filas = ''

      for (let i = 0; i < res.x.length; i++) {
        filas += '<tr><td>' + (i + 1) + '</td><td>' + res.x[i] + '</td><td>' + res.y[i] + '</td></tr>'
      }

      $('#euler-body-table').html(filas)
    })
  }

  if (method == 'newtonRaphson') {
    const {
      'nr-x': x,
      'nr-f': f,
    } = form_data

    console.log({
      decimales, x, f
    })
  }

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