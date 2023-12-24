//이벤트 리스너 추가 

let paragraph = document.querySelector("p"); //접근


function changeparagrph () { //이벤트에 실행될 코드 작성
    return paragraph.textContent = "Clicked"; //p 단락의 텍스트를 바꾸는코드
}




paragraph.addEventListener("click",changeparagrph); //어떤이벤트발생시키고,발생될때 어떤코드를실행할지



//사용자 입력 이벤트 & 이벤트 객체 -------------------------------------------------------------------


let inputText = document.querySelector("input")//접근

function changeinput(event) {
    //let enteredText =inputText.value; //입력 된 값을 가지고 있음
    let enteredText2=event.target.value; //입력된 값에 접근할수있음
    //let enteredText3 = event.data; // 입력된 값을 구체적으로 보여줌
    console.log(enteredText);
    //console.log(event);//입력되어 이벤트가 발생한것을 설명해줌
}


inputText.addEventListener("input",changeinput); //값이 입력될때 실행


// ----------------------------------------------------------------------------