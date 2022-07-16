//Q7. 어떤 정수들이 있다.
// 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어진다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요

// 입출력 예 #1
// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.

// 입출력 예 #2
// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

function solution(absolutes, signs) {
  let answer = 0; // 인자값을 string 초기화를 "" - number 초기화를 0
  console.log(typeof answer);
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer = answer + absolutes[i];
      console.log(answer);
    } else {
      answer = answer - absolutes[i];
      console.log(answer);
    }
  }
  return answer;
}

console.log(solution([4, 7, 8], [true, false, false]));

// 1. sign가 음수인지 양수인지 구분
// 2. 그에 따라 부호 정해주기
// 3. 인풋은 배열로 받는다.
