//         전체 글자를 배열로 준비해주고,
// 컴퓨터가 판단할것
// 배열판단 -> 첫 글자 문자열 하나하나 비교하여 쓰기 (전환 명령어)-> 글자 판단 (전환 명령어)->글자 지우기 (전환 명령어)-> 두번째 배열로 넘어가서 문자열 하나하나 쓰기 (전환 명령어)-> 글자 판단 (전환 명령어) -> 글자 지우기 반복 -> 정해진 배열 갯수 만큼 다 비교 되면
// console.log('ㄴㅇㄹㄴㅇㄹㄴㄹ');
const words = [
  'Webinars',
  'Workshops',
  'Product Launches',
  'Company Town Halls',
  'Customer Events',
];

let isDeleting = false;
let wordIndex = 0;
let text = '';
// 문자열 하나하나 text, 배열word[], 배열인덱스wordIndex,  isDeleting 자르는 중인지

function typeWord() {
  const swapWordDiv = document.getElementById('swap-word');
  const word = words[wordIndex];

  if (isDeleting) {
    if (text.length === 0) {
      // 문자열이 다 지워졌는지 확인
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      // 현재 적용된 배열의 인덱스 + 1 % 배열의 총 길이
      // 0이 나오면 다시 처음으로 돌아감 반복.
      setTimeout(typeWord, 100);
    } else {
      // 글씨 지우기 단계
      text = word.substring(0, text.length - 1);
      swapWordDiv.innerText = text;
      setTimeout(typeWord, 50);
    }
  } else {
    if (text.length === word.length) {
      // 타이핑을 다한 문자열의 길이 === 선택된 배열의 해당 문자열 길이 타이핑을 다 입력했는지
      isDeleting = true;
      setTimeout(typeWord, 500);
      // 비동기함수 0.5초가 지나면 typeWord 함수 호출
    } else {
      // 글자 타이핑 구역 문자열 하나하나씩 늘려서
      text = word.substring(0, text.length + 1);
      swapWordDiv.innerText = text;
      setTimeout(typeWord, 100);
    }
  }
}

typeWord();
