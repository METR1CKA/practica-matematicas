// Método de Newton-Raphson
function newtonRaphson({ decimales, x0, f }) {
  let epsilon = Math.pow(10, -decimales)

  let df = math.derivative(f, 'x')

  let x1, error

  do {
    let fValue = math.evaluate(f, { x: x0 })

    let dfValue = df.evaluate({ x: x0 })

    x1 = x0 - fValue / dfValue

    error = Math.abs(x1 - x0)

    x0 = x1

  } while (error > epsilon)

  return x1
}