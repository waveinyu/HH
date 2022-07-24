let memberArray = ["yuyu", "momo", "nana"];
console.log("meberArray[0] is", memberArray[0]);
let memberObject = {
  manager: "yuyu",
  developer: "nana",
  designer: "luna",
};

memberObject.designer = "ruby"; //점으로 접근해 객체의 내용을 수정

console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);
//객체에서도 배열처럼 대괄호로 접근 가능

delete memberObject.manager;
console.log("after delete memberObject.manager", memberObject.manager);
