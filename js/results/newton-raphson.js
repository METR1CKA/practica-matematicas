function newtonRaphsonResult({
  form_data,
  decimales,
  result
}) {
  const {
    'nr-x': x,
    'nr-f': f,
  } = form_data

  const res = newtonRaphson({
    decimales: parseInt(decimales),
    x0: parseFloat(x),
    f
  })

  result.load('components/tables/newton-raphson-table.html', function () {
    let $tbody = $('#nr-body-table')

    $tbody.empty()

    let $tr = $('<tr>')
    $tr.append($('<td>').text(res))
    $tbody.append($tr)
  })
}
