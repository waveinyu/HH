let memberArray = ["yuyu", "nana", "luna"];
let memberObject = {
  manager: "yuyu",
  developer: "nana",
  designer: "luna",
};

console.group("array loop"); // console.group() - groupEnd() 영역 지정 들여쓰기
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i += 1;
  // console.log(i);
}
console.groupEnd("array loop");

console.group("object loop");
for (name in memberObject) {
  //let name, name 모두 가능
  console.log(name, memberObject[name]);
  // 객체가 갖고 있는 값만큼 반복한다
}
console.groupEnd("object loop");
