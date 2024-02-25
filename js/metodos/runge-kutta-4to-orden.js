// Método de Runge-Kutta de cuarto orden
function rungeKutta({ decimales, h, xn, yn, yf, f }) {
  let arrX = []

  let arrY = []

  while (xn < yf) {
    let k1 = h * math.evaluate(f, { x: xn, y: yn })

    let k2 = h * math.evaluate(f, { x: xn + h / 2, y: yn + k1 / 2 })

    let k3 = h * math.evaluate(f, { x: xn + h / 2, y: yn + k2 / 2 })

    let k4 = h * math.evaluate(f, { x: xn + h, y: yn + k3 })

    yn = parseFloat(
      (yn + (k1 + 2 * k2 + 2 * k3 + k4) / 6).toFixed(decimales)
    )

    xn = parseFloat(
      (xn + h).toFixed(decimales)
    )

    arrX.push(xn)

    arrY.push(yn)
  }

  return { x: arrX, y: arrY }
}