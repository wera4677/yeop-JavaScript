// 1. 숫자의 합 for 문
const sumButton =document.querySelector("#calculator button"); //sum 합 버튼 요소 접근


function sumNumber() {
    const uesrNumber = document.getElementById("user-number"); //sum 의 input요소에 접근
    const enterdNumber = uesrNumber.value; //입력된 값 

    let sum = 0;

    for(let i = 0; i <= enterdNumber; i++ ){
        sum += i;  //총합
    }

   const outputResult = document.getElementById("calculated-sum"); //sum의 p단락 요소에 접근
   outputResult.textContent = sum;  //텍스트 값을 총합으로 바꿈
   outputResult.style.display = "block"; //안보이게 한 스타일을 보이게 변경
}

sumButton.addEventListener("click",sumNumber)

//2. 부분 요소 강조 효과 for of 문

const highlightButton = document.querySelector("#highlight-links button"); //강조 버튼 접근

function highlightLink(){
 const anchors =document.querySelectorAll("#highlight-links a");//모든 a요소 접근 =>배열로 반환됨

for (const anchor of anchors) { //anchors 변수에있는 a 배열 반복
    anchor.classList.add("highlight"); //스타일 class 추가
}

}

highlightButton.addEventListener("click",highlightLink)

//3. 사용자 데이터 표시 작업 (for in문) 

const dummyUserData ={
    firstName:"kim",
    lastName:"jae yeop",
    age: 25
};

const userDataButton = document.querySelector("#user-data button"); //버튼에 접근


function outputUserData(){
   const outputData = document.querySelector("#output-user-data"); //ul 접근

   outputData.innerHTML = ""; // 다시 버튼을 눌렀을때 처음부터 실행되게끔 만들어줌

   for(const key in dummyUserData){
    const newUserDataList = document.createElement("li"); //li 목록 요소 추가 
    const outputText = key.toUpperCase() + " : " + dummyUserData[key]; //대문자로 변경 + value 
    newUserDataList.textContent = outputText; //li요소의 텍스트로 저장 (저장은 되지만 보이지는않음)
    outputData.append(newUserDataList); //ul 요소에 li요소를 추가한다 (추가해야 보인다)
   }

}



userDataButton.addEventListener("click",outputUserData);

//4. 통계 주사위 (welie 문)

const rollDiceButton =document.querySelector("#statistics button"); //버튼 접근

function rollDice() { //주사위를 굴리기 위한 함수
    return Math.floor(Math.random()*6)+1; //내장함수 사용 (정수만 나오게 함) 

}
function deriveNumberOfDice (){ //주사위 굴리고 나온값을 저장하는 함수
    const targetNumber =document.getElementById("user-target-number"); //input 요소 에 접근 
    const diceRollsList =document.getElementById("dice-rolls"); //ul 요소에 접근

    const enterdNumber = targetNumber.value; //input에 입력된값
    diceRollsList.innerHTML =""; //초기화 

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice(); //참이 될때 까지 rollDice() 함수 반복

        numberOfRolls += 1; //반복될때 마다 횟수 +1 증가

        const newRollList = document.createElement("li"); // li요소 추가
        const outputText ="Roll" + numberOfRolls + " : " + rolledNumber; //횟수와 rollDice()함수에서 반환된수 텍스트에 저장
        newRollList.textContent = outputText;  //li요소에  텍스트값 추가
        diceRollsList.append(newRollList); // ul요소 안에 li요소 추가 


        if (rolledNumber == enterdNumber) { //입력한 값과 함수에서 반환된 값이 같다면
            hasRolledTargetNumber = true;
        }
    }

    const outputTotalRolls = document.getElementById("output-total-rolls"); //span 요소에 접근
    const outputTargetNumber =document.getElementById("output-target-number");//두번째 span 요소에 접근

    outputTargetNumber.textContent = enterdNumber; //입력된 값 텍스트로 저장
    outputTotalRolls.textContent =numberOfRolls; //주사위 굴린 횟수 텍스트에 저장

}


rollDiceButton.addEventListener("click",deriveNumberOfDice);