// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
let start = ["leo", "kiki", "eden"];
// console.log(start.sort());
let end = ["eden", "kiki"];

function solution(start, end) {
  let answer = "";
  start.sort(); // 오름차순
  end.sort();
  for (let i = 0; i < start.length; i++) {
    if (start[i] !== end[i]) {
      answer = start[i];
      return answer;
    }
  }
}

// 배열 start와 배열 end의 요소를 비교한다 end[i] => start[0~i]
// end에 이름이 없을 때 같지 않을 때 그 요소를 리턴
