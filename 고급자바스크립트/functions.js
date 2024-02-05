function greetUser(greetingPrefix,userName = "user") {
    console.log(greetingPrefix + " " + userName);
}
greetUser("Hi","yeop"); //매개변수 전달 
greetUser("Hello"); // 기본값인 user가 출력

function sumUp(...numbers) { 
    let result = 0;
    
    for (const number of numbers) {
        result += number;
    }
    return result;
}
const inputNumbers = [1,5,10,11,20,31];

console.log(sumUp(inputNumbers)); //값이 아니구 배열이 나옴 => 1,5,10,11,20,31

console.log(sumUp(...inputNumbers)); //더한 값이 나옴 => 78