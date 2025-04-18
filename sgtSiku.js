for (let i = 1; i <= 5; i++) {
  let temp = "";
  for (let j = 5; j > 0; j--) {
    if (j > i) {
      temp += " ";
    } else if (j <= i) {
      temp += "* ";
    }
  }
  console.log(temp);
}

for (let a = 0; a < 5; a++) {
  let wadah = "";
  for (let b = 0; b < 5; b++) {
    if (a == 0 || a == 4 || b == 0 || b == 4) {
      wadah += "* ";
    } else {
      wadah += "  ";
    }
  }
  console.log(wadah);
}

for (let b = 1; b <= 5; b++) {
  let hasil = "";
  for (let k = 5; k > 0; k--) {
    if (k !== b) {
      hasil += "  ";
    } else {
      hasil += "*";
    }
  }
  console.log(hasil);
}
for (let w = 1; w <= 5; w++) {
  let penampung = "";
  for (let s = 5; s > 0; s--) {
    if (s !== w) {
      penampung += "* ";
    } else {
      penampung += "  ";
    }
  }
  console.log(penampung);
}
