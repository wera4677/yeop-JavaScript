const changeinput = document.querySelector("#Product-name");  // input요소 에 접근
const ChangeNum = document.querySelector("#remainig-charts");//span 요소에 접근

const inputMaxLength = changeinput.maxLength; // input요소에 있는 maxlength ="60"을 가져온다

function updateinput(event) {
    const enteredText =event.target.value; //입력되는 값 
    const textLength = enteredText.length; //입력된 값의 문자열 길이
    const result = inputMaxLength - textLength; // 60 에서 (입력된 문자열 길이) 뺀수 저장
    ChangeNum.textContent = result; //span요소 텍스트에 접근해서 텍스트변경

    if(result === 0) {
        ChangeNum.classList.add("error"); //문자열 길이가 0 일때 class  스타일 추가
        changeinput.classList.add("error"); 
    }else if (result <= 10) {
        ChangeNum.classList.add("warning"); // 문자열 길이가 10이하 일때 스타일추가
        changeinput.classList.add("warning");
        changeinput.classList.remove("error",); // 문자열 길이가 0보다 클때 class스타일 삭제
        changeinput.classList.remove("error",); 
    }else {
        ChangeNum.classList.remove("error","warning");  //문자열 길이가 10 클때 class 삭제
        changeinput.classList.remove("error","warning"); 
}
}


changeinput.addEventListener("input",updateinput);
