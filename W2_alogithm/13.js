// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

function solution(a, b) {
  let answer = "";
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const year = new Date(`2016-${a}-${b}`);
  // console.log(year);
  console.log(year.getDay());
  answer = day[year.getDay()];
  return answer;
}

console.log(solution(5, 24));

// a - 월
// b - 일
// 윤년 : leap year
// 2016년 1월 1일은 금요일 8 15 23 31 금요일
//
// 2016년 5월 24일은 화요일

function solution2(a, b) {
  let count = 0;
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 1; i < a; i++) {
    count += month[i];
    //         각 달의 일수를 더한다.
  }
  count += b;
  //     각달의 일수에 b(입력된 일수)를 더하고
  return day[(count + 4) % 7]; // 금요일 부터 1일 이므로 4를 더해서 7로 나눈 나머지 값으로 요일을 알아낸다
}
