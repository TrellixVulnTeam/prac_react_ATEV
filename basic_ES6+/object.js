//object 선언 1
let tom1 = {
    name : "tom",
    age : 10,
    region : "Seoul"
};

let tom2 = {
    "name" : "Tom",
    "age" : 10,
    "region" : "Seoul"
};

//js는 위에 두가지 경우가 똑같다.
//dict형태에 name같은 것이 문자열로 지정해도 되고 그냥 지정해도 된다.
//python 
//tom ={
//     "name" : "tom",
//     "age" : 10,
//     "region" : "Seoul",
// } 이라고 작성해야한다.


//object 선언 2
const tom2 = {
    "name" : "Tom",
    "age" : 10,
    ["score" + "1"] : "Seoul"
}

// python의 경우 
// tom2 = {
//     "name" : "Tom",
//     "age" : 10,
//     "score" + "1" : "Seoul"
// }   로 사용가능

//  ["score" + "1"] array가 아니다.
// score1로 변형하여 넣는 방법 


const key1 = "location";

const tom = {
    name : "Tom",
    [key1] : "Seoul",
}

// python의 경우 
// const tom = {
//     name : "Tom",
//     key1 : "Seoul",
// }

// js에서는 꼭 const를 dict안에 넣을때는 []브라켓 처리를 해준다.



//object 선언 3
let name = "Tom";
let age = 10;

let tom1 = {
    name:name,
    age: age,
    print: function(){
        console.log('name : ${this.name}, age: ${this.age}')
    }
}

let tom1 = {
    name,
    age,
    print(){
        console.log('name : ${this.name}, age: ${this.age}')
    }
}

// js에서는 위에 두가지 경우가 같은 내용을 가진다.
// python set문법과는 다른 문법이다.


// object 복사

const obj1 = {value:10};
const obj2 = obj1;
const obj3 = JSON.parse(JSON.stringify(obj1)); //심플한 방법 deep copy 좋은 방법은 아님

obj1.value += 1;

console.log('obj1:', obj1);
console.log('obj2:', obj2);
console.log('obj3:', obj3);

// obj1: {value:11}
// obj2: {value:11}
// obj3: {value:10}
// js는 object/array에 대해서는 대입 시에 얕은 복사(shallow copy)를 한다.