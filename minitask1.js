// function ganjilGenap(number) {
//   if (number % 2 == 0) {
//     console.log("angka yang anada masukkan adalah genap");
//   } else {
//     console.log("angka yang anda masukkan adalah ganjil");
//   }
//   return;
// }

// ganjilGenap(7);

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
