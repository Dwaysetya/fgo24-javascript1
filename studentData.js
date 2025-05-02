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
let total = 0;
for (let i = 0; i < studentData.length; i++) {
  total += studentData[i].score;
}
let average = total / studentData.length;
console.log(`Rata-rata nilai siswa adalah ${average}`);

// Siswa dengan nilai tertinggi

let highestScore = { name: "", score: 0 };

for (const student of studentData) {
  if (student.score > highestScore.score) {
    highestScore = student;
  }
}

console.log(
  `Siswa dengan nilai tertinggi adalah ${highestScore.name} dengan skor ${highestScore.score}`
);
