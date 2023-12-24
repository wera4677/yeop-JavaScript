// document.body.children[1].children[0].href = "https://google.com";

let aElement = document.getElementById("extrtnal");
aElement.href = "https://google.com";

aElement = document.querySelector("a");
aElement.href ="https://naver.com";

//-------------------------------------------------------------------------------
//요소 추가하기
//1.새로운 요소부터 만들어야한다
let newAnchor;
newAnchor = document.createElement("a"); //새로운 요소를 만들기 (매개변수가 필요)=>브라우저에 어떤 요소인지 알려줘야함
newAnchor.href = "https://google.com";
newAnchor.textContent = "This leads to Google!"

//2.다음은 DOM에 넣어줘야한다
let firstParagraph = document.querySelector("p");


//3.부모컨텐츠에 새로운 요소를 삽입해줘야한다
firstParagraph.append(newAnchor);



//----------------------------------------------------------------------------
//요소삭제

//1.빼야할 요소를 선택
let h1Remove = document.getElementById("h1Element");//삭제할 요소에 접근


//2.그요소를 삭제

h1Remove.remove(); //삭제



//-----------------------------------------------------------------------------
//요소 이동

//1.옮기고싶은 요소 부모에 자신을 추가 
firstParagraph.parentElement.append(firstParagraph); // [p]요소의 부모에 [p]를 추가




//---------------------------------------------------------------------------------------
//inner HTML

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";



