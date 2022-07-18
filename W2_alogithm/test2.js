function solution(strings, n) {
  var answer = [];
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i][n]);
    answer.push(strings[i].charCodeAt(n));
  }
  console.log(answer);
  return answer;
}

solution(["sun", "bed", "car"], 1);
