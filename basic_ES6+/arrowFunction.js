//Arrow Function 
//리액트에서 가장 많이 사용하는 문법

//기본 문법 잘사용 안함
function fn1(){
    return x + y;
};

//기본문법 2 잘 사용안함
const fn2 = function(){
    return x + y;
};

//Arrow Function 1 : 기본 arrow function 형태
const fn3 = (x, y) => {
    return x + y;
};

//Arrow Function 2 : 인자가 2개 일 떄 return 적용
const fn4 = (x, y) => x + y;
console.log(fn4(x=1, y=2));
console.log(fn4({x:1, y:2}));
console.log(fn4({y:2, x:2}));
//출력
// 3
// [object Object]undefined
// [object Object]undefined

// const fn4 = ({x, y}) => x + y;
// console.log(fn4(x=1, y=2));
// console.log(fn4({x:1, y:2}));
// console.log(fn4({y:2, x:2}));
//출력 
// NaN
// 3
// 4

//Arrow Function 3 : 인자가 하나일 때 return 적용 
const fn5 = x => (x + 10);
console.log(fn5(1));
console.log(fn5(x=1));

var tom = {
    name : "tom",
    print1 : function (){
        console.log(this.name);
        (function(){
            console.log(this.name);
        })(); // 이렇게 사용하게 되면 this의 의미가 달라져 같은 값이 나오지 않음
    },
    print2 : function (){
        console.log(this.name);
        var me = this;//그리하여 me라는 변수를 만들고 그 부분의 this를 할당하여 같은 값을 가리키게 만들었었음
        (function(){
            console.log(me.name);
        })();
    },
    print3 : function (){
        console.log(this.name);
        (() => {
            console.log(this.name);
        })();// arrow function은 이런 부분에서 값이 같도록 해줌
    }
}

tom.print1();
tom.print2();
tom.print3();

//출력
// tom
// undefined
// tom
// tom
// tom
// tom

