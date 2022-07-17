// forEach
// arr.forEach(func(value, index, array));

// 아래 코드는 forEach로 배열을 순회하면서 모든 요소를 출력하는 예제
// arr.forEach() 인자로 함수를 전달하면 배열의 모든 요소를 순회할 때, 함주의 인자로 요소를 전달

function yuyu(family) {
  console.log(family);
}

let arr = ["nana", "luna", "ruby"];
arr.forEach(yuyu); //배열 순회

function arrPlus(nums) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum += i;
    console.log(sum);
    result = sum;
  }
  return result;
}

let arr2 = [1, 2, 3, 4, 5];
// arr.forEach(arrPlus);
