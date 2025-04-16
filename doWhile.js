let j = 1;
do {
  if (j === 4) {
    console.log("Fazztrack");
  } else {
    console.log(j);
  }
  j++;
} while (j <= 5);

let d = 0;
do {
  let w = 0;
  let wadah = "";
  while (w < 5 - d) {
    wadah += "*";
    w++;
  }
  console.log(wadah);
  d++;
} while (d < 5);
