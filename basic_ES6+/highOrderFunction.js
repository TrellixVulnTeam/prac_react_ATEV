//High Order Function 고차 함수
//function안에 function, const 등등을 지정하여 
//그 return값을 function이나 const로 반환 해 줄수 있는 함수

//고차함수에서 parameter를 함수로 받을 수 있고 
//그 함수를 안에서 함수 안에 인자로 활용 할 수 있다.
function base_10(insertFn){
    function outputFn(x, y){
        return insertFn(x, y) + 10;
    }
    return outputFn;
}

function insertFn(a, b){
    return a + b;
}

const returnFn = base_10(insertFn);
console.log(returnFn(1,2));



//arrow function 으로
//1차 변형
function base_10(insertFn){
    const outputFn = (x, y) => {
        return insertFn(x, y) + 10;
    }
    return outputFn;
}

const insertFn = (a, b) => {
    return a + b;
}

const returnFn = base_10(insertFn);
console.log(returnFn(1,2));

//2차 변형
function base_10(insertFn){
    return outputFn = (x, y) => insertFn(x, y) + 10;
}

const insertFn = (a, b) => {
    return a + b;
}

const returnFn = base_10(insertFn);
console.log(returnFn(1,2));


//3차 변형
const base_10 = insertFn => outputFn = (x, y) => (insertFn(x, y) + 10);

const insertFn = (a, b) => a + b;

const returnFn = base_10(insertFn);
console.log(returnFn(1,2));