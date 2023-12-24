// 자바스크립트에 코멘트가 추가되는 방법입니다
// 주석은 실행되지 않습니다. 추가 정보를 제공하기 위해 있을 뿐입니다
// 사용자 또는 다른 개발자에 대한 정보

// 운동시간!

// 1) 세 개의 새로운 변수를 만듭니다:
//    - 선택한 온라인 과정의 이름을 저장하는 변수
//    - 해당 코스의 가격을 저장하는 변수
//    - 본 코스를 수강할 때의 3가지 주요 목표를 저장하는 변수
let webName = "webDevelopment";
let scoer = 10000;
let goal = ["공부","열정","꾸준함"];

// 2) 3개 변수값 출력("alert")
// alert(webname);
// alert(scoer);
// alert(goal);

// 3) 세 변수를 함께 "그룹화"하고 그 후에도 여전히 값을 출력합니다
let group ={
    name: webName,
    peice : scoer,
    goal1 : goal,
}

// alert(group.name);
// alert(group.peice);
// alert(group.goal1);
// 4) "주요 목표" 변수의 두 번째 요소도 출력합니다
alert(group.goal1[1]);

// 5) 다음 작업을 수행하는 사용자 지정 명령을 추가합니다:
//    - "주요 목표" 변수를 사용하고 해당 식별자로 요소에 액세스합니다
//    - 콘크리트 식별자 값은 동적/유연적이어야 합니다 
//      (즉, 다른 식별자에 대해 명령을 실행할 수 있음)
//    - "주요 목표" 변수도 동적이어야 합니다. 명령어가 작동해야 합니다 
//      임의의 값 목록을 사용하여
//    - custom 명령은 액세스된 값(즉, list 요소)을 제공해야 합니다
function paly(array,index) {
    let goal = array[index];
    return goal;
}







// 6) (5)에서 사용자 지정 명령을 실행하고 결과를 출력합니다("경고")
alert(paly(group.goal1,1))