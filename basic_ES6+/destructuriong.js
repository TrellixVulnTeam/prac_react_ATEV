// 비구조화(destructuring)은 리액트에서 기본적으로 바로 가용하므로 꼭 익히자.!!

//Array Destructuring 배열 비구조화 문법 

// tom만 name에 할당
let name = ["tom", 10, "Seoul"];
// 10 만 age에 할당
let [,age,] = ["tom", 10, "Seoul"];
// name = tom, age = 10 , region = seoul, height = undefined를 할당
let [name, age, region, height] = ["tom", 10, "Seoul"];
// name = tom, age = 10 , region = seoul, height = 150를 할당
let [name, age, region, height=150] = ["tom", 10, "Seoul"];

function get_height() {
    console.log("get_height 호출");
    return 150;
}

let [name, age, region, height=get_height()]= ["tom", age, "Seoul"]



//Object Destructuring 객체 비구조화

const tom = {
    name : "tom",
    age : 10,
    region : "Seoul",
}
// age = 10, name = tom, height = undefined 가 할당
const {age, name, height} = tom;

// 밑에 경우가 다른 언어의 일반적인 경우지만, 이렇게 사용하지 않는다.
const age = tom.age;
const name = tom.name; 


//객체 비구조화 덕분에 아래의 경우가 성립이된다.
const print_person1 = (person)=>{
    console.log(person.name);
};
// person.name 이 -> name에 할당이 되어 name의 내용을 사용할 수 있다.
const print_person2 = ({name})=>{
    console.log(name);
};

// 비구조화 할당을 이용하여 for문에도 활용이 가능하다.
const people = [
    {name : 'tom', age: 10 , region: 'Seoul'},
    {name : 'steve', age : 12, region : 'Pusan'},
];

for (const person of people){
    console.log(person.name, person.age);
}

for(const {name, age} of people){
    console.log(name, age);
}



//비구조화 뎁스 
const person = {
    name : 'tom',
    age : 10,
    region : {
        country : '서울',
        postcode : '06222',
    }
};
//region:이라는 경로를 지정하여 하위 내용을 깊게 끄내져 와 사용이 가능하다
const { name, region: {postcode}}  = person;

console.log(name, postcode)
