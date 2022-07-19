let str = "a123";
console.log(isNaN(str)); //true
console.log(parseInt(str)); //NaN

let str2 = "1234";
console.log(isNaN(str2)); //false
console.log(parseInt(str2)); //NaN

function solution(s) {
  let answer = parseInt(s);
  if ((s.length === 4 || s.length === 6) && s == answer) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution("a234"));

// 넘버가 아니면(이즈넌이면) false
// 넘버이면(이즈넌이 아니면) true
