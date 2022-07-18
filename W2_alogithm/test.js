function solution(arr, divisor) {
  let box = [];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      box.push(arr[i]);
      box.sort((a, b) => a - b);
      answer = box;
    } else {
      answer = [-1];
    }
  }
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
// 배열의 각 요소를 divisor로 나누어 떨어졌을 때(나머지가 0일 때)
// 그 요소를 새로운 배열에 push해준다
// 오름차순으로 정렬 sort()

function solution(arr, divisor) {
  let answer = [];
  let box = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      box.push(arr[i]);
      //   console.log(box);
      box.sort((a, b) => a - b);
      answer = box;
    }

    if (box.length == 0) {
      answer = [-1];
    }
  }
  return answer;
}
