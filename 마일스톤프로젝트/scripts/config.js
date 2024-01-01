//HTML의 오버레이를 작용시키는 파일 (함수 파일)
//유효성 검사 & 저장하는 파일

function openPlayerConfig(event) { //클릭했을때 검은배경과 이름입력 창이 열리도록 만들기
    editedPlayer = +event.target.dataset.playerid; //플레이어 1 또는 플레이어 2 구분하기위해 사용
   
    playerOverlay.style.display ="block";
    backdrop.style.display="block";
}

function closePlayer() { // 모달 에 포함되어있는 취소 버튼을 누루면 닫기 실행
    playerOverlay.style.display ="none";
    backdrop.style.display="none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutput.textContent= "";
    formElement.firstElementChild.lastElementChild.value =""; //입력란 초기화
}

function savePlayer(event) { //플레이어 이름 입력 받은후 http 서버에 보내는 역할 이지만 이것을 방지 
    event.preventDefault(); //서버로 보내는 기본동작을 막는다
    const formData = new FormData(event.target); // 특정 모양의 객체를 생성하는 함수 ==> 입력값 자동으로 추출
    const enteredPlayername = formData.get("Playername").trim(); //입력한 값을 가져올수있다. 문자열로만 이루어 져있으며 trim 을 사용하여 공백제거

    if (!enteredPlayername) { //입력값이 공백 일때 오류메세지 발생
        event.target.firstElementChild.classList.add("error"); //스타일 추가
        errorsOutput.textContent = "이름을 입력해 주세요";
        return;
    }
    const updatePlayerData = document.getElementById("player-" + editedPlayer + "-data"); //동적으로 연결
    updatePlayerData.children[1].textContent= enteredPlayername //h3 을 입력한 값으로 바꿈

    players[editedPlayer - 1].name = enteredPlayername;  //플레이어 1값은 0인덱스 플레이어 2 값은 1인덱스 
    closePlayer();
}