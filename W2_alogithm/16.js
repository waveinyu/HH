// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

function solution(s) {
  let answer = true;
  let pBox = [];
  let yBox = [];
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      pBox.push(s[i]);
    } else if (s[i] === "y") {
      yBox.push(s[i]);
    }
  }

  if (pBox.length === yBox.length) {
    answer = true;
  } else answer = false;

  return answer;
}

console.log(solution("Pyy"));

// p와 y가 있는지 각각 찾고
// 각각 박스에 넣고
// 그 렝스가 같으면 ture
// 렝스가 다르면 false
// 개수가 없으면 true

// p와 y는 대소문자 구분 X
// 1. 둘의 개수가 같을 때 ture
//   둘의 개수가 없을 때 true
// 2. 개수가 다르면 false

// s에서 p와 y를 찾는다
// s의 개수를 찾는다
// y의 개수를 센다
