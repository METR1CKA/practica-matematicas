// Método de Euler Mejorado
function eulerMejorado(decimales, iteraciones, h, xn, yn, f) {
  let arrX = []
  let arrY = []

  for (let i = 0; i < iteraciones; i++) {
    let xna = xn + h

    let fxy = math.evaluate(f, { x: xn, y: yn })

    let yna = yn + h * fxy

    let fxy2 = math.evaluate(f, { x: xna, y: yna })

    let yvar = yn + h * (fxy + fxy2) / 2

    yn = parseFloat(yvar.toFixed(decimales))
    xn = parseFloat(xna.toFixed(decimales))

    arrX.push(xn)
    arrY.push(yn)
  }

  return { x: arrX, y: arrY }
}

// Método de Runge-Kutta de cuarto orden
function rungeKutta(dydx, x0, y0, h, n) {
  let y = y0;
  for (let i = 1; i <= n; i++) {
    let k1 = h * dydx(x0, y);
    let k2 = h * dydx(x0 + 0.5 * h, y + 0.5 * k1);
    let k3 = h * dydx(x0 + 0.5 * h, y + 0.5 * k2);
    let k4 = h * dydx(x0 + h, y + k3);
    y = y + (1.0 / 6.0) * (k1 + 2 * k2 + 2 * k3 + k4);
    x0 = x0 + h;
  }
  return y;
}

// Método de Newton-Raphson
function newtonRaphson(func, dfunc, x0, e, N) {
  let x1, f, df, i;
  for (i = 0; i < N; i++) {
    f = func(x0);
    df = dfunc(x0);
    x1 = x0 - f / df;
    if (Math.abs(x1 - x0) <= e) {
      return x1;
    }
    x0 = x1;
  }
  return false;
}
