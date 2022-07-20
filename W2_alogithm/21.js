// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
let s = "try hello world";

function solution(s) {
  let answer = "";
  s = s.split(" ");
  console.log(s);
  console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

console.log(solution(s));
