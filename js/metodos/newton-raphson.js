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