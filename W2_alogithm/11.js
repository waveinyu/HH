// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  let answer = [];
  let box = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
    // box.push(x * i);
    // answer = box;
  }

  return answer;
}

console.log(solution(2, 5));

//미리 만들고 하나씩 곱하기
function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

console.log(solution2(2, 5));
// 자연수 : 0부터 1씩 무한히 증가
// 정수 : 0을 포함한 양음수

// n는 렝스이기도 함
// [x * 1, x * 2, x * 3, x * 4, x * 5 ... , x * n]
// for (let i = 0; i <= n; i++) {}
// .push()
// answer = x * n;
// }
// map?
//
