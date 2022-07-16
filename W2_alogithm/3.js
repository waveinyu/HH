// Q3. 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
  let answer = [];
  let index = s.length / 2;
  if (s.length % 2 == 1) {
    //홀수
    answer = s[Math.floor(index)];
  } else {
    //짝수
    answer = s[index - 1] + s[index];
  }
  return answer;
}
console.log(solution("qwer"));
