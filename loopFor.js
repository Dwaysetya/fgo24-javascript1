for (i = 1; i <= 5; i++) {
  if (i === 4) {
    console.log("Fazztrack");
  } else console.log(i);
}

for (let i = 0; i <= 5; i++) {
  let wadah = "";
  for (let j = 0; j < 5 - i; j++) {
    wadah += "*";
  }
  console.log(wadah);
}
