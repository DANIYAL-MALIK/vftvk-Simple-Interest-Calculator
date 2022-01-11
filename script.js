function compute() {
  let amount = document.getElementById("principal").value;
  let Ir = document.getElementById("rate").value;
  ye = new Date();
  y = document.getElementById("years").value;
  year=((ye.getYear()-100))+y
  document.write(
    "If you deposit ",
    amount,
    " at an intrest rate of ",
    Ir,
    " you will receive an amount of ",
    (Ir * amount * y) / 100,
    " in the year ",
    y
  );
}
