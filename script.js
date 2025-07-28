function calculatePeriod() { 
  const C_sol = 900;
  const C_wat = 4200;
  const L = 2264700;
  const k = 0.046;
  const x = 0.001;
  const T_w1 = 25;
  const T_w2 = 100;

  const wRated = parseFloat(document.getElementById('wRated').value);
  const mSol = parseFloat(document.getElementById('mSol').value);
  const mDot = parseFloat(document.getElementById('mDot').value);
  const area = parseFloat(document.getElementById('area').value);
  const T_max = parseFloat(document.getElementById('Tmax').value);
  const T_min = parseFloat(document.getElementById('Tmin').value);
  const T_ambient = parseFloat(document.getElementById('Tambient').value);
  const T_avg = (T_max + T_min) / 2;

  const Q_loss = mSol * C_sol * (T_max - T_min);
  const Q_out = (-k * area * (T_ambient - T_avg)) / x + mDot * C_wat * (T_w2 - T_w1) + mDot * L;
  const t_off = Q_loss / Q_out;
  const t_on = Q_loss / wRated;
  const t_total = t_off + t_on;

  document.getElementById('result').innerText = `Thermostat Period: ${t_total.toFixed(2)} seconds`;
}
