// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
  let answer = "";
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
  return answer;
}

console.log(solution(3));
