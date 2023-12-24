let age = 32;
let userName = "Max";
let hobby = ["스포츠", "요리", "독서"];
let job = {
  직업: "개발자",
  활동지: "뉴욕",
  연봉: 50000,
};

let adultYears;

function calulateAdultYears(userAge) {
    let result;
    result = userAge - 18;
    return result;
}
adultYears = calulateAdultYears(age)
console.log(adultYears);

let person={
  name:"Max",
  greet() {
    console.log("Hello");
  }
}

person.greet();

