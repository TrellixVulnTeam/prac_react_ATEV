//callback 함수 (비동기 구현 방식)
//callback은 어떤것을 처리할 때 뒷부분에 이어서 진행 하게 만드는 함수이다.

const fs = require('fs');

fs.readdir('.', function(err, files){
    if(err){
        console.log('Error finding files: ' + err)
    }
    else {
        console.log(files);
    }
});

console.log("ended");

// 요즘에는 프론트 단에서 처리할게 많아지면서 callback의 구현이 엄청 많아졌는데 
// 이부분이 늘어 나다 보니 가독성도 좋지않고, 구현해야하는 코드양도 많아 졌다.
// 그래서 promise와 async/await를 이용하여 소스를 구현한다.

//Promise 방법
const fs1 = require('fs');
const fsPromises = fs1.promises;

fsPromises.readdir('.')
    .then(files => {    // 위의 내용이 실행 되었을 때 그다음 로직은 then으로 처리
        console.log(files);    
    })                  // err일때는 catch로 처리
    .catch(err => console.error(err));

//fsPromises.readdir 가 비동기 동작이기에 
//ended가 먼저 출력이 되고 그다음 fsPromises가 출력이 된다.

console.log("ended");

//출력
// ended
// [
//   'arrowFunction.js',
//   'callback.js',
//   'const.js',
//   'defaultParameters.js',
//   'destructuriong.js',
//   'hoisting.js',
//   'namedParameters.js',
//   'object.js',
//   'spreadOperator.js'
// ]

//async/await 방법 
//구동은 비동기 이지만 소스로는 동기적으로 작성하여 가독성이 좋다.
//ES8부터 지원

const fs2 = require('fs');
const fsAsync = fs2.promises;

async function fn(){
    try{
        let files = await fsAsync.readdir('.');
        console.log(files)
    }
    catch(err){
        console.error(err);
    }
}
fn();

console.log("ended");



//출력
// ended
// [
//   'arrowFunction.js',
//   'callback.js',
//   'const.js',
//   'defaultParameters.js',
//   'destructuriong.js',
//   'hoisting.js',
//   'namedParameters.js',
//   'object.js',
//   'spreadOperator.js'
// ]