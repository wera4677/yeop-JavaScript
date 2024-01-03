//게임 로직을 담당하는 파일

function startGame(){ //게임시작 버튼이 클릭되었을때 게임화면 보임
    if (players[0].name === "" || players[1].name === "") { //플레이어 이름이 없을경우 경고창
        alert("플레이어 이름을 입력해주세요!")
        return;
    }
    gameArea.style.display ="block";
}

function selectGameField(event) { //어떤 필드에 어떤 심볼이 적용되는지 
    event.target.textContent = players[activePlayer].symbol; //플레이어 [0]
    event.target.classList.add("disabled");
}