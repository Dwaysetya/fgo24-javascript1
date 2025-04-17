const luasLingkaran = (r) => {
  if (r % 7 == 0) {
    console.log((22 / 7) * r * r + "adalah luas segitiga");
  } else {
    console.log(3.14 * r * r + "adalah luas lingkaran");
  }
  return;
};

luasLingkaran(7);

const kelilingLingkaran = (phi) => {
  if (phi % 7 == 0) {
    console.log(2 * (22 / 7) * phi + "adalah keliling segitiga");
  } else {
    console.log(2 * 3.14 * phi + "adalah keliling lingkaran");
  }
  return;
};

kelilingLingkaran(7);
