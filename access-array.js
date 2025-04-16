// fgo24-javascript1

const data1 = [
  [
    "0",
    [
      "0",
      "1",
      "2",
      {
        string: [
          0,
          {
            value: "hello",
          },
        ],
      },
    ],
  ],
];
console.log(data1[0][1][3].string[1].value);

const studentData = [
  {
    name: "jhon",
    score: 80,
  },
  {
    name: "arie",
    score: 99,
  },
  {
    name: "denis",
    score: 60,
  },
  {
    name: "jane",
    score: 85,
  },
  {
    name: "ed",
    score: 90,
  },
];

// Hasil Rata-rata
let sum = 0;
let result = 0;
for (let i = 0; i < studentData.length; i++) {
  sum = sum + studentData[i].score;
  result = sum / studentData.length;
}
console.log(result);

// Siswa dengan nilai tertinggi

let highestScore = {
  name: "",
  score: 0,
};

for (let a = 0; a < studentData.length; a++) {
  if (highestScore.score < studentData[a].score) {
    highestScore = studentData[a];
  }
}
console.log(
  `siswa dengan nama ${highestScore.name} adalah siswa dengan nilai tertinggi (${highestScore.score})`
);
