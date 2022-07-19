function solution(month, day) {
  let dday = "";
  let result = "";
  let date = new Date(`2022-${month}-${day}`);
  dday = new Date(date.setDate(date.getDate() + 98));
  console.log(dday);

  let wol = dday.getMonth() + 1;
  let il = dday.getDate();
  console.log(wol);
  console.log(il);
  result = `${wol}월 ${il}일`;

  return result;
}
console.log(solution(1, 18));
