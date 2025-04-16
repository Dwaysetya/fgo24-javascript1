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
