// 객체 확장 표현식 (object extensible)
// es6+ 에 js에서는 객체를 확장해서 표현하는 것이 가능하다

// 기존 객체 정의 방식
const x = 0;
const y = 0;

const obj1 = { x:x, y:y};
console.log(obj1);
//출력
//{ x: 0, y: 0 }


//객체 확장을 사용하면
const obj2 = {x , y};
console.log(obj2);
//출력
//{ x: 0, y: 0 }

//기존 코드보다 확실히 작은코드로 같은 기능을 구현 할수있다.
// 이렇게 {} 객체 형태의 값에서 객체key값과 변수(상수)명이 같으면 
//하나만 사용해서 객체 안에 값을 표현 할 수 있다.



// 또한 이런것도 가능하다
// 객체안에 []를 사용하면 객체 안에 들어있는 내용을 반환하여
// 문자열 형태의 값으로 등록이 가능하다. 말이 어려운데....

const keyString = "first";

const combined = {[ keyString ] : "엥 keystring아니지? first지?"};
console.log(combined);
//출력
// { keyString : "엥 keystring아니지? first지?" } 가 나올 것이라 생각했지만,
// { firstKey: '엥 keystring아니지? first지?' } 가 나오게 된다.


//또한 객체 안에 함수를 넣는경우도 function이라는키워드가 생략이가능하다.
const functionTest = {
    x,y,
    methodA : function (){
        console.log('A');
    },
    methodB : function (){
        console.log('B');
    }
};
// 이렇게 작성을 해야됬지만, 아래와 같이 작성해도 똑같은 효과로 나온다.
const functionTest = {
    x,y,
    methodA(){
        console.log('A');
    },
    methodB(){
        console.log('B');
    }
};






//그래서 react에서는 이런 것도 가능하다.

