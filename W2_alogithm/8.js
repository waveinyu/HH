// Q8. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수를 완성하세요
// 입출력 예)
// arr : [1,2,3,4]
// return : 2.5

let arr = [1, 2, 3, 4];
// console.log(typeof arr); // object

function solution(arr) {
  let answer = 0; // 인자값을 string 초기화를 "" - number 초기화를 0
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    // console.log(typeof answer);
    // console.log(answer);
  }
  answer = answer / arr.length;
  return answer;
}

console.log(solution(arr));
