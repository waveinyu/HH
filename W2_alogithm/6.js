// Q6. 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let nums = numbers;
  let sum = 0;
  let numSum = 0;
  let answer = 0;

  // 0~9까지의 합
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  console.log(sum);

  for (let i = 0; i < nums.length; i++) {
    numSum += nums[i];
  }
  console.log(numSum);

  answer = sum - numSum;
  return answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
