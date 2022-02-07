

//호이스팅이라고하여 var name이 위에 자동으로 작성이 되고
// name = "hyunseok"이라게 들어가게 된다.
console.log(name); //undefined

var name = "hyunseok";

console.log(name); // hyunseok

//위에 호이스팅이라는 것을 해결하기 위해 
// let과 const가 나왔다.

// const는 상수 이기 때문에 필히 작성할때 값을 넣는다.
//에러가 나는 코드
const name;

console.log(name); 

name = "hyunseok";

console.log(name); 

// 다른 언어와 똑같은 로직
let name;

console.log(name); 

name = "hyunseok";

console.log(name); 