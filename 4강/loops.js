// for 문
for (let i = 0;i < 10; i++ ) {
    console.log(i);
}
//for of

const users = ["Max","Anna","Joel"];
for (const user of users){
    console.log(user)
}

//for in 

const loggedInUser = {
    name:"Max",
    age:32,
    isAdmin:true
};

for (const keyName in loggedInUser ) {
    console.log(keyName); //이름을 반환
    console.log(loggedInUser[keyName]); //값을 반환

}

//while

let isFinished =false;

while (!isFinished) {
    isFinished = confirm("종료할까요?") //Yes or NO 가 반환
}

console.log("Done!")