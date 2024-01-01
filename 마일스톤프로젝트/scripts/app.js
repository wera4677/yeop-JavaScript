//초기화 시키는 파일
//상수 와 변수 사용
let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name:"",
        symbol: "X",
    },
    {
        name:"",
        symbol: "O",
    },
]

const playerOverlay =document.getElementById("config-overlay"); //모달 
const backdrop =document.getElementById("backdrop"); //검은색 배경 

const formElement = document.querySelector("form") //from 
const errorsOutput =document.getElementById("config-errors"); //오류메세지 
const gameArea = document.getElementById("active-game"); //게임필드 


const editPlayer1Btn = document.getElementById("edit-player-1"); //수정 1 버튼 
const editPlayer2Btn = document.getElementById("edit-player-2"); //수정 2 버튼
const cancelBtn =document.getElementById("concel-btn"); // 모달 에 포함되어 있는 취소 버튼
const startNewGame = document.getElementById("start-game"); //게임시작 버튼
const gameField = document.querySelectorAll("#game-board li"); //게임보드 


editPlayer1Btn.addEventListener("click",openPlayerConfig);
editPlayer2Btn.addEventListener("click",openPlayerConfig);

cancelBtn.addEventListener("click",closePlayer);
backdrop.addEventListener("click",closePlayer);

formElement.addEventListener("submit",savePlayer); //제출 이벤트

startNewGame.addEventListener("click",startGame)

for (const gameFieldElement of gameField) {
    gameFieldElement.addEventListener("click",selectGameField);
}

