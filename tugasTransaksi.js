const dataPembelian = [
  {
    itemname: "spidol",
    price: 8000,
    date: "12-04-2025",
  },
  {
    itemname: "pulpen",
    price: 4000,
    date: "12-04-2025",
  },
  {
    itemname: "pensil",
    price: 2000,
    date: "12-04-2025",
  },
  {
    itemname: "buku",
    price: 5000,
    date: "12-04-2025",
  },
  {
    itemname: "penggaris",
    price: 7000,
    date: "10-04-2025",
  },
  {
    itemname: "sampul bening",
    price: 2000,
    date: "11-04-2025",
  },
  {
    itemname: "meterai",
    price: 12000,
    date: "15-04-2025",
  },
  {
    itemname: "penghapus",
    price: 2000,
    date: "17-04-2025",
  },
  {
    itemname: "label",
    price: 10000,
    date: "13-04-2025",
  },
  {
    itemname: "",
    price: 8000,
    date: "12-04-2025",
  },
];

// memunculkan nama barang dengan harga rata rata

//cari transaksi paling tinggi + nominalnya berapa
let highestScore = {
  name: "",
  price: 0,
};
for (let i = 0; i < dataPembelian.length; i++) {
  if (highestScore.price < dataPembelian[i].price) {
    highestScore = dataPembelian[i];
  }
}
console.log(`data pembelian paling tinggi adalah ${highestScore.price}`);

// mencari tangal transaksi dengan nilai transaksi nilai terendah
let lowScore = {
  date: "",
  price: 100000,
};
for (let j = 0; j < dataPembelian.length; j++) {
  if (lowScore.price > dataPembelian[j].price) {
    lowScore = dataPembelian[j];
  }
}
console.log(
  `Transaksi terendah adalah ${lowScore.price} pada tanggal ${lowScore.date}`
);

// memunculkan nama barang dengan harga rata rata
let sum = 0;
let result = 0;
for (let a = 0; a < dataPembelian.length; a++) {
  sum = sum + dataPembelian[a].price;
  result = sum / dataPembelian.length;
}
console.log(`harga barang dengan rata ratanya adalah ${result}`);
