// 방법1 - 터미널에선 돌아가지만 프로그래머스에서는 런타임에러
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer;
}
console.log(solution(arr1, arr2));


function solution(arr1, arr2) {
  var answer = arr1;
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}


// 방법2 - map()을 사용
function solution2(arr1, arr2) {
  return arr1.map((e, i) => arr2[i].map((v, j) => arr1[i][j] + arr2[i][j]));
}

console.log(solution2(arr1, arr2));
