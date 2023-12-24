// 운동시간!

// 1. "DOM으로 드릴링"하여 <h1> 요소를 선택하고
// 선택한 이름의 변수에 저장합니다
let h1docment = document.body.firstElementChild;
console.dir(h1docment);

// 2. (1)의 변수를 사용하여 "부모"에게 접근합니다
// 저장된 <h1> 요소의 요소(즉, <body> 요소로)
// 보너스: (1)의 변수를 사용하여 다음에 액세스합니다
// 형제 요소(즉, <h1> 요소 옆의 <p> 요소)
console.dir(h1docment.parentElement);
console.dir(h1docment.nextElementSibling);



// 3. getElementById로 <h1> 요소를 선택하고 저장합니다
// 동일하거나 새로운 변수(당신에게)
let h1Element = document.getElementById("h1Element");
console.dir(h1Element);


// 4. querySelector(querySelector)로 두 번째 <p> 요소를 선택합니다(그럴 수도 있습니다)
// HTML 코드에 무언가를 추가해야 합니다(예: 클래스)
// 그리고 당신이 선택한 이름의 새로운 변수에 저장합니다
let classElement = document.querySelector(".highlighted");
console.dir(classElement);

// 5. 보너스 태스크: <p> 요소의 텍스트 내용을 변경해 보십시오
// (4)에서 선택하고 원하는 다른 텍스트로 설정했습니다

classElement.textContent = "This was changed by Max!";
console.log(classElement);