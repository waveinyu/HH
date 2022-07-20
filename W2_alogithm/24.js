// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// n	return
// 118372	873211

function solution(n) {
  let answer = "";
  let box = [];
  n = n.toString();
  //   console.log(n);
  for (let i = 0; i < n.length; i++) {
    box.push(n[i]);
    console.log(box);
    box.sort((a, b) => b - a);
  }
  for (let i = 0; i < box.length; i++) {
    answer += box[i];
  }
  return parseInt(answer);
}

console.log(solution(118372));
// 문자열 변환
// 배열
// 내림차순
// 숫자로 형변환

////////////////////////////////////////////////////////////////// by.상돈님
function solution2(n) {
  var answer = 0;
  let check = String(n);
  // console.log(check)
  test = [...check];
  console.log(test);
  test0 = test.sort((a, b) => b - a);
  console.log(test0);
  test1 = test0.join("");
  console.log(test1);

  answer = Number(test1);

  return answer;
}
