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