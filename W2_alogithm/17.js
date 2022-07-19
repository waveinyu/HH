// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 입출력 예
// s	return
// "a234"	false
// "1234"	true

function solution(s) {
  let answer = true;
  if (s.length === 4 || s.length === 6) {
    if (isNaN(s)) {
      //넘버가 아니면 false
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution("1234"));
