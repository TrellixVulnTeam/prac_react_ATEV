//const는 상수 이기 때문에 시작할때 값을 넣어야 된다.
//아래와 같이 작성하면 오류가 난다.
const name = "hyunseok";
name = "fwfwf";
console.log(name)

//하지만 dict형태로 작성하면 문제가 
// 상수인 tom은 변경이 되지 않았지만, tom안에 있는 lang은 변경이 가능하다.
const tom = { lang : "Python"};
tom.lang = "JavaScript";
console.log(name)