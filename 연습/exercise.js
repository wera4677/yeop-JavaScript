// 배운 것을 연습하세요!

// 1) 두 개의 <버튼> 요소를 선택하여 두 개의 다른 변수에 저장합니다.
//    - "id"를 추가하거나 사용하지 않고 첫 번째 버튼을 선택합니다
//    - "id"를 사용하여 두 번째 버튼을 선택합니다

const firstButton = document.querySelector("button"); //첫번째 버튼에 접근
const secondButton = document.getElementById("second-button");// 두번째 버튼에 접근



// 2) 두 버튼에 "클릭" 이벤트 청취기를 추가합니다(두 개의 다른 기능으로).
//    기능은 클릭한 버튼을 "console.dir()"해야 합니다.
//    - 저장된 변수를 사용하여 첫 번째 버튼을 출력합니다
//    - 저장된 변수를 사용하지 않고 두 번째 버튼을 출력합니다

// function firstClickContent (){
//     console.dir(firstButton);

// }

// function secondClickcontent(event) {
//     console.dir(event.target);
    
// }

// firstButton.addEventListener("click",firstClickContent)
// secondButton.addEventListener("click",secondClickcontent)



// 3) 이제 페이지에 표시된 텍스트에 언급된 단락을 선택하여 저장합니다
//    (제1항과 제3항)
//    - 문서에 구멍을 뚫어 두 단락을 모두 선택합니다
//      언급된 요소들
//    - DOM 드릴링에 어려움을 겪는 경우 "ids" 대신 솔루션을 사용하십시오!



const firstParagraph =document.body.children[2].children[1] //body안에 sectiond 의 2번째 자식인 p 단락 접근
//const thirdParagraph =document.body.children[2].children[3]; // body안에 sectiond 의 4번째 자식인 p 단락 접근
const thirdParagraph =firstParagraph.nextElementSibling.nextElementSibling; //firstParagraph 의 다음 형제의 다음형제 =4번째 p단락





// 4) (2)에서 다음과 같이 기능을 변경합니다:
//    - 첫 번째 버튼은 세 번째 단락(즉, 앞의 <p>)을 제거합니다
//    - 두번째 버튼은 첫번째 단락의 배경색을 파란색으로 바꿉니다



function firstClickContent (){
    //console.dir(firstButton);
    thirdParagraph.remove(); // 접근된 단락 제거

}

function secondClickcontent(event) {
   // console.dir(event.target);
   //firstParagraph.style.backgroundColor="blue" //css를 변경하여 배경색을 파란색으로 바꿈
   firstParagraph.className ="blue-bg" // class를 추가하여 기존에있던 스타일을 적용
}

firstButton.addEventListener("click",firstClickContent)
secondButton.addEventListener("click",secondClickcontent)
// 5) CSS 클래스 추가뿐만 아니라 "인라인 스타일"을 변경하여 (4) 해결
//    참고: 먼저 style.css 파일에 해당 클래스를 추가해야 합니다!