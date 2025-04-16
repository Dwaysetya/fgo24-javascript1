let x = 1;
while (x <= 5) {
  if (x === 4) {
    console.log("Fazztrack");
  } else {
    console.log(x);
  }
  x++;
}

let a = 0;
while (a < 5) {
  let b = 0;
  let wadah = "";
  while (b < 5 - a) {
    wadah += "*";
    b++;
  }
  console.log(wadah);
  a++;
}
