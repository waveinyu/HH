// 이 문제는 다시 고민해 볼 문제..
// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  // 입력 받은 숫자를 'data에 받는다'
  const n = data.split(" "); //date(입력받은 숫자)를 배열로 변경
  const a = Number(n[0]), // a는 한 줄에 대한 별 개수(n), b는 몇 줄 출력(m)
    b = Number(n[1]);
  console.log(a);
  console.log(b);
});

// n개의 별을 m번 찍고 싶다

// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   const row = "*".repeat(a);
//   for (let i = 0; i < b; i++) {
//     console.log(row);
//   }
// });
