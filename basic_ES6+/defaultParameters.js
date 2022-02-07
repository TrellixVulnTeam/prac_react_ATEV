//Default Parameter 디폴트로 파라미터 값을 지정할 수 있다.

function hello(name="tom", age=10){
    console.log(name, age);
}

hello();
hello('steve', 20);
// 출력
// tom 10
// steve 20
const get_default_age = () => 10

function hello2(name="tom", age=get_default_age){
    console.log(name, age);
};

hello2();
hello2('steve', 20);
// 출력
// tom [Function: get_default_age]
// steve 20

function get_default_height() {
    console.log("get_default_height 호출");   
    return 150;
};

function say_hello(name, height=get_default_height()){
    console.log(`name : ${name},  height : ${height}`);
};

say_hello("Tom", 160);
say_hello("Steve");
say_hello("John", 160);
say_hello("Suji");
// 출력 
// name : Tom,  height : 160
// get_default_height 호출
// name : Steve,  height : 150
// name : John,  height : 160
// get_default_height 호출
// name : Suji,  height : 150

// get_default_height 함수는 호출 될때 당시에 다시 한번 만들어지고 
// 그 다음에 호출이 된다 

// python 에 경우 
// get_default_height 호출
// name : Tom,  height : 160
// name : Steve,  height : 150
// name : John,  height : 160
// name : Suji,  height : 150
//이라는 형식으로 맨처음 만들어질 때 한번 호출이 되며 그다음에는 
//사져와 사용만 하게 된다.
