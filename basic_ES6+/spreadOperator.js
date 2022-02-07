//전개 연산자 (Spread Operator)
// python의 *, ** 문법과 동일 하다.

//배열전개
// name = tom 이 들어가게 되고 
// 나머지는 rest라는 것이 생성이 되며 array로 들어가게 된다.
let [name, ...rest]=["tom", 10, 'Seoul'];
console.log(name);
console.log(...rest);
// 출력
// tom
// 10 Seoul

let names = ["Steve","John"];
let students = ["toms", ...names, ...names];
console.log(...names);
console.log(...students);
// 출력
// Steve John
// toms Steve John Steve John




//dict 전개
let tom = {
    name : 'tom',
    age : 10,
    region : 'Seoul'
};
//tom이라는 dict object을 복사를 먼저하고 
//그다음 dict에 name을 찾아 name이라는 변수에 steve라는 값을 대입한다.
let steve = {
    ...tom,
    name: 'steve'
};
console.log(tom.name);
console.log(steve.name);
// 출력
// tom
// steve